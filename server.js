const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const path = require('path');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- LEAD GENERATION LOGIC ---

// Email Transporter (Configure with SendGrid/AWS SES for Production)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use SMTP in prod
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

// WhatsApp Client
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

app.post('/api/leads', async (req, res) => {
  const { name, company, email, phone, message, productType } = req.body;

  try {
    // 1. Save to DB
    const lead = await prisma.lead.create({
      data: { name, company, email, phone, message, productType }
    });

    // 2. Email Admin
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `🔥 HOT LEAD: ${company} - ${productType}`,
      text: `Name: ${name}\nPhone: ${phone}\nRequirement: ${message}`
    };
    transporter.sendMail(mailOptions);

    // 3. Auto-Reply to Customer
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Quote Request Received - Industrial Systems',
      text: `Dear ${name},\n\nWe have received your enquiry for ${productType}. Our engineering team will review your specs and send a technical proposal within 2 hours.\n\nReference ID: #${lead.id}`
    });

    // 4. WhatsApp Alert to Sales Head (Critical for speed)
    client.messages.create({
      body: `🚨 NEW LEAD: ${company} needs ${productType}. Call ${phone} immediately.`,
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: process.env.SALES_HEAD_WHATSAPP
    });

    res.status(200).json({ success: true, leadId: lead.id });

  } catch (error) {
    console.error("Lead Error:", error);
    res.status(500).json({ error: "Failed to process lead" });
  }
});

// --- ADMIN INTELLIGENCE ---
app.get('/api/admin/stats', async (req, res) => {
  // Add authentication middleware here
  const totalLeads = await prisma.lead.count();
  const recentLeads = await prisma.lead.findMany({ take: 10, orderBy: { createdAt: 'desc' } });
  res.json({ totalLeads, recentLeads });
});

// --- PRODUCTION DEPLOYMENT ---
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/out')); // Next.js Static Export or Build
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'out', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Industrial Server running on Port ${PORT}`));

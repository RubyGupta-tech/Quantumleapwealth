import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Extract fields, gracefully handling different possible form inputs
    const firstName = data.first_name || "";
    const lastName = data.last_name || "";
    const name = data.user_name || data.name || `${firstName} ${lastName}`.trim() || "Unknown";
    const email = data.user_email || data.email;
    const phone = data.phone_number || data.phone || null;
    const service = data.service_interest || data.service || null;
    const message = data.message || null;
    const source = data.source || "Website Form";

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. Save to PostgreSQL CRM Database
    const newLead = await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        service,
        message,
        source,
      },
    });

    // 2. Send Notification Email via Resend
    // Check DB for custom notification email
    const dbEmailSetting = await prisma.setting.findUnique({
      where: { key: 'notification_email' }
    });
    const notificationEmail = dbEmailSetting ? dbEmailSetting.value : "hello@quantumleapwealth.com";

    // We send this to the Admin (Quantum Leap Wealth)
    const adminEmailHtml = `
      <h2>New Lead from Quantum Leap Wealth Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Interest:</strong> ${service || "Not provided"}</p>
      <p><strong>Message:</strong><br/> ${message || "No message"}</p>
      <hr/>
      <p><em>This lead has been saved to your CRM Dashboard.</em></p>
    `;

    await resend.emails.send({
      from: "Quantum Leap Website <onboarding@resend.dev>", // Resend testing domain
      to: [notificationEmail], // The email where alerts should go
      subject: `New Lead: ${name} - ${service || "General Inquiry"}`,
      html: adminEmailHtml,
    });

    // We can also send an auto-reply to the user if we want
    const userEmailHtml = `
      <p>Hi ${firstName || name},</p>
      <p>Thank you for reaching out to Quantum Leap Wealth. We have received your inquiry and our team will get back to you within 24 hours.</p>
      <br/>
      <p>Best regards,<br/>Anuradha Gupta<br/>Quantum Leap Wealth</p>
    `;

    await resend.emails.send({
      from: "Quantum Leap Wealth <onboarding@resend.dev>", 
      to: [email],
      subject: "We received your inquiry - Quantum Leap Wealth",
      html: userEmailHtml,
    });

    return NextResponse.json({ success: true, leadId: newLead.id });
  } catch (error) {
    console.error("API /contact error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

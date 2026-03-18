import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, company, jobTitle, phone, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const token = process.env.AGENTMAIL_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const apiUrl = "https://api.agentmail.to/v0/inboxes/gen2tron-jc@agentmail.to/messages/send";

  // Notification to admin
  await fetch(apiUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      to: "ksisbuilding@gmail.com",
      subject: `scan2dms.com enquiry from ${name}`,
      text: [
        `New enquiry from scan2dms.com\n`,
        `Name: ${name}`,
        company ? `Company: ${company}` : null,
        jobTitle ? `Job Title: ${jobTitle}` : null,
        phone ? `Phone: ${phone}` : null,
        `Email: ${email}`,
        `\nMessage:\n${message}`,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  // Auto-reply to enquirer
  await fetch(apiUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      to: email,
      subject: "Thanks for your enquiry — scan2dms.com",
      text: `Hi ${name},\n\nThank you for getting in touch via scan2dms.com.\n\nWe've received your enquiry and will respond within one working day. If your request is urgent, you can reach us on WhatsApp or email ks@scan2dms.com.\n\nBest regards,\nscan2dms.com`,
    }),
  });

  return NextResponse.json({ ok: true });
}

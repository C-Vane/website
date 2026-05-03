import type { NextApiRequest, NextApiResponse } from "next"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Cattabiani IT Solutions <noreply@cattabiani.eu>",
      to: "vanessa@cattabiani.eu",
      replyTo: email,
      subject: subject
        ? `[Website] ${subject}`
        : `[Website] New enquiry from ${name}`,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || "Not specified"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <h2 style="color: #1d4ed8; margin-bottom: 24px;">New contact form submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 100px; color: #64748b;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1d4ed8;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Subject</td>
              <td style="padding: 8px 0;">${subject || "Not specified"}</td>
            </tr>
          </table>
          <div style="background: #f8fafc; border-left: 4px solid #1d4ed8; padding: 16px; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
            Sent from the contact form at cattabiani-is.com
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      return res.status(500).json({ error: error.message })
    }

    console.log("Resend success, email id:", data?.id)
    return res.status(200).json({ success: true, id: data?.id })
  } catch (error) {
    console.error("Resend error:", error)
    return res.status(500).json({ error: "Failed to send email" })
  }
}

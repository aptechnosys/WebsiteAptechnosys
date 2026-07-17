import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import ContactEmail from "@/app/emails/ContactEmail";

export async function POST(req) {
  try {
    const {
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      message,
    } = await req.json();

    // Validation
    if (
      !name ||
      !email ||
      !projectType ||
      !budget ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Send enquiry to admin
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `🚀 New Project Enquiry from ${name}`,
      react: ContactEmail({
        name,
        email,
        phone,
        company,
        projectType,
        budget,
        message,
      }),
    });

    // Auto reply to client
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: "Thank you for contacting Aptechnosys 🚀",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:30px">
          <h2 style="color:#2563eb;">Thank you for contacting Aptechnosys!</h2>

          <p>Hi <strong>${name}</strong>,</p>

          <p>
            We have successfully received your enquiry.
          </p>

          <p>
            Our team will review your requirements and get back to you
            within <strong>24 hours</strong>.
          </p>

          <hr/>

          <h3>Your Submission</h3>

          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${budget}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>

          <br/>

          <p>Regards,</p>
          <strong>Aptechnosys Team</strong>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}
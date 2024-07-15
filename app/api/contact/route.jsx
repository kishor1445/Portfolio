import { Resend } from "resend"
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const data = await req.json()
  await resend.emails.send({
    to: "kishorramanan5@gmail.com",
    from: "onboarding@resend.dev",
    subject: `Message From ${data.firstname} ${data.lastname}`,
    react: <div>
      {data.message}
      <p>Email ID: {data.email}</p>
      </div>
  });
    return NextResponse.json({
      status: 'ok'
    })
}
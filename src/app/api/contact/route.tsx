import { NextResponse } from "next/server";
import validator from "validator";
import nodemailer from "nodemailer";

interface MessageTypes {
  from: string;
  to: string | any;
  subject: string;
  html: string;
}

export async function POST(req: Request) {
  const body = await req.json();
  const name = body.name;
  const email = body.email;
  const subject = body.subject;
  const message = body.message;

  if (!validator.isEmail(email)) {
    return NextResponse.json({ error: "Invalid Email Id." });
  }

  try {
    const mailer = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: { user: process.env.EMAIL, pass: process.env.PASSWORD },
    });

    const mail: MessageTypes = {
      from: email,
      to: process.env.EMAIL,
      subject: subject,
      html: `
        <h1>New Email From: ${email}</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Message:</strong> ${message} </p>
      `,
    };

    mailer.sendMail(mail, (error, info) => {
      if (error) {
        return NextResponse.json(error);
      } else {
        return NextResponse.json(info);
      }
    });
  } catch (error) {
    return NextResponse.json(error);
  }
  return NextResponse.json(body);
}

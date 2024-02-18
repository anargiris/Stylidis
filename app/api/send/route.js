import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, subject } = await req.json();

  console.log("Data is", name, email, subject);

  try {
    const data = await resend.emails.send({
      from: "Anargyros <noreply@stylidis.dev>",
      to: ["anargiriss@hotmail.com"],
      subject: "Portfolio Contact Form Submission",
      react: EmailTemplate({ name, email, subject }),
    });

    console.log("response is", data);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

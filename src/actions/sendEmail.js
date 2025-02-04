'use server'
import EmailTemplate from "../components/EmailTemplate";
import { Resend } from 'resend';

const resend = new Resend("re_dn22p9uu_64AmZ1xnHuc1gUVm8AYBuvgo");

export default async function sendEmail () {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['kumargagandeo9@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ name:'John',message:'hello this is a test message',verificationUrl:'https://youtube.com'})
    });

    if (error) {
      return {error ,  status: 500 };
    }

    return data;
  } catch (error) {
    return{ error,status: 500 };
  }
}

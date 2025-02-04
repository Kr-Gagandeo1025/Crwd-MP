'use server'
import EmailTemplateHealth from "../components/EmailTemplateHealth";
import EmailTemplateStudent from '../components/EmailTemplateStudent';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail (type, data) {
  try {
    if (type === "health"){
      // console.log(data)
      const { response, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['kumargagandeo9@gmail.com'],
        subject: 'Hello world',
        react: EmailTemplateHealth({
          patientName: data.beneficiary_name,
          patientAge: data.age,
          disease:data.disease,
          governmentIdUrl:'example.com',
          costEstimationUrl:data.hospital_estimation_letter_link,
          verificationUrl:`http://localhost:3000/emailverify/hospital/${data.id}`
        })
      });
      if (error) {
        return {error ,  status: 500 };
      }
      return {message : "mail sent", status: 200};
    }
    if (type === "student"){
      // console.log(data)
      const { response, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['kumargagandeo9@gmail.com'],
        subject: 'Hello world',
        react: EmailTemplateStudent({
          studentName: data.beneficiary_name,
          rollNUmber: data.institute_roll_number,
          phoneNumber:data.phone_number,
          fatherName:"Mr. John Doe",
          courseDuration:"4 Years",
          admissionLetterUrl:data.admission_letter_link,
          verificationUrl:`http://localhost:3000/emailverify/student/${data.id}`
        })
      });
      if (error) {
        return {error ,  status: 500 };
      }
      return {message : "mail sent", status: 200};
    }
  } catch (error) {
    return{ error,status: 500 };
  }
}

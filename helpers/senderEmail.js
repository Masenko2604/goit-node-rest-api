import "dotenv/config";
import SendGrid from "SendGrid";


const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;

const config = {
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
};

const transporter = SendGrid.createTransport(config);

const sendEmail = async ({ to, subject, html }) => {
  try {
    await transporter.sendMail({
      from: SMTP_USER,
      to,
      subject,
      html,
    });
  } catch (error) {
    throw error;
  }
};

export default sendEmail;
  
  
  
import "dotenv/config";
import sendGridMail from '@sendgrid/mail';


sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
  const msg = {
    to,
    from: process.env.SMTP_USER,
    subject,
    html,
  };

  try {
    await sendGridMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendEmail;
  
  
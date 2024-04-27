import nodemailer from "nodemailer";
import "dotenv/config";

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "valuadum1@meta.ua",
        pass: META_PASSWORD,
    }
};
const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//     to: "kinedav149@huvacliq.com",
//     from: "valuadum1@meta.ua",
//     subject: "Test email",
//     html: "<p><strong>Test email</strong> from localhost:3000</p>"
// };
// transport.sendMail(email)
//     .then(() => console.log("Email send success"))
//     .catch((error) => console.log(error.message));

const sendEmail = data => {
    const email = { ...data, from: "go.tanja@meta.ua" };
    return transport.sendMail(email);
}

export { sendEmail };
  
  
  // --https://app.sendgrid.com/guide/integrate/langs/nodejs---site

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'test@example.com', // Change to your recipient
//   from: 'test@example.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
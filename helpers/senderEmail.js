import nodemailer from "nodemailer";
import "dotenv/config";

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "go.tanja@meta.ua",
        pass: META_PASSWORD,
    }
};
const transport = nodemailer.createTransport(nodemailerConfig);


const sendEmail = data => {
    const email = { ...data, from: "go.tanja@meta.ua" };
    return transport.sendMail(email);
}

export {sendEmail};
  
  
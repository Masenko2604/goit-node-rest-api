import express from "express";
import morgan from "morgan";
import cors from "cors";
import 'dotenv/config';
import {contactsRouter} from "./routes/contactsRouter.js";
import  {authRouter}  from './routes/api/auth.js';




const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
  to: "go.tanja@meta.ua",
  from: "tanjushka2604@gmail.com",
  subject: "Test email",
  html: " <p><strong>Test email</strong>from localhost:3000</p>"
};

sgMail.send(email)
.then(()=> console.log("Email send success"))
.catch(error => console.log(error.message))



export const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
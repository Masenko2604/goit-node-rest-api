import nodemailer from "nodemailer";

const { MY_EMAIL, MY_PASSWORD } = process.env;

// Створюємо транспорт для відправки email
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: MY_EMAIL,
        pass: MY_PASSWORD,
    },
});

// Функція для відправки email
export const sendEmail = async (to, subject, text) => {
    try {
        // Налаштовуємо дані для відправки email
        const mailOptions = {
            from: myEMAIL, // Ваш email
            to: to, // Адреса отримувача
            subject: subject, // Тема листа
            text: text, // Текст листа
        };

        // Відправляємо email
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};




// import nodemailer from "nodemailer";
// import "dotenv/config";

// const { META_PASSWORD } = process.env;

// const nodemailerConfig = {
//     host: "smtp.meta.ua",
//     port: 465,
//     secure: true,
//     auth: {
//         user: "go.tanja@meta.ua",
//         pass: META_PASSWORD,
//     }
// };
// const transport = nodemailer.createTransport(nodemailerConfig);



// const sendEmail = data => {
//     const email = { ...data, from: "go.tanja@meta.ua" };
//     return transport.sendMail(email);
// }

// export { sendEmail };
  
  
  
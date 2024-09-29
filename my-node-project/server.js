const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000; // You can use any port number

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Set up Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., Gmail
        auth: {
            user: 'hellovelle0@gmail.com', // Your email
            pass: 'dpio rqvz escs qehn' // Your email password or an app password
        }
    });

    const mailOptions = {
        from: email,
        to: 'hellovelle0@gmail.com', // Your email
        subject: ' Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Failed to send email.');
        }
        res.send('Email sent successfully.');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

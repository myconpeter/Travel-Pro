const express = require('express');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
// import bodyParser from 'body-parser';
// import path from 'path';

const router = express.Router();

dotenv.config();

let transporter = nodemailer.createTransport({
	host: 'live.smtp.mailtrap.io', // Use the correct SMTP host
	port: 2525, // Change to 2525, or 465/587 based on your Mailtrap settings
	secure: false, // Use true if you're using port 465
	auth: {
		user: 'smtp@mailtrap.io', // Replace with your Mailtrap username
		pass: '83a6a895db451bf7dedf4500c708a8fa', // Replace with your Mailtrap password
	},
});

// verify transpoter

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('success, ready for message');
	}
});

router.post('/book', (req, res) => {
	console.log('posting');
	const {
		firstName,
		lastName,
		email,
		date,
		time,
		from,
		to,
		travellerName,
		ticketClass,
		category,
		request,
	} = req.body;

	const mailOptions = {
		from: 'info@demomailtrap.com',
		to: 'michealpeter040@gmail.com',
		subject: 'Form Submission',
		html: `<p>First Name : ${firstName} </p><p>Last Name: ${lastName} </p>
        <p>Email Address: ${email} </p>
        <p>Date: ${date} </p>
        <p>Time: ${time} </p>
        <p>From: ${from} </p>
        <p>To: ${to} </p>
        <p>Traveller Name: ${travellerName} </p>
        <p>Ticket Class: ${ticketClass} </p>
        <p>Category: ${category} </p>
        <p>Special Request: ${request} </p>
        `,
	};

	// Send the email
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log('Error sending email:', error);
			res.status(500).send('Error sending email');
		} else {
			res.status(200).send('Email sent successfully');
		}
	});

	res.redirect('/success');
});

module.exports = router;

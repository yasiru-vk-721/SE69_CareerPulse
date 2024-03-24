const User = require('../models/user.js');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const {EMAIL, PASSWORD} = process.env;

const testMail = async (req, res) =>{
    
    try {
        const{userEmail} = req.body;
        const email = userEmail;

        const exist = await User.findOne({email});
        console.log(EMAIL, PASSWORD);
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        });

        const MailGenerator = new Mailgen({
            theme: 'cerberus',
            product: {
                name: 'Career Pulse',
                link: 'https://www.iit.ac.lk/'
            }
        });
        const emailContent = {
            body:{
                name: 'Successfull Registration Email',
                intro: 'Welcome to Our Platform! We\'re very excited to have you on board.',
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };

        const mail = MailGenerator.generate(emailContent);
        const message = {
            from: EMAIL,
            to: userEmail,
            subject: 'Test Email',
            html: mail
        };

        const info = await transporter.sendMail(message);
        console.log(info);
        return res.status(201).json({
            msg: "you should receive an email"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error })
    }

}

module.exports = {
    testMail
}
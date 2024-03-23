const User = require('../models/user.js');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const {EMAIL, PASSWORD} = process.env;

//send email after register to the platform
// const sendRegConfirm = async (req, res) => {
//     try {
//         const {email} = req.body;
//         const user = await User.findOne({email});
//         if(!user){
//             return res.json({
//                 error: "Email does not exist"
//             })
//         }

//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: EMAIL,
//                 pass: PASSWORD
//             }
//         });
//         // create mail generator
//         const mailGenerator = new Mailgen({
//             theme: 'cerberus',
//             product: {
//                 name: 'Career Pulse',
//                 link: ''
//             }
//         });

//         // create email
//         const emailTemplate = {
//             body: {
//                 name: user.firstName,
//                 intro: 'Welcome to Career Pulse! We\'re very excited to have you on board.',
//                 action: {
//                     instructions: 'To get started with Career Pulse, please click here:',
//                     button: {
//                         color: '#22BC66',
//                         text: 'Confirm your account',
//                         link: ''
//                     }
//                 },
//                 outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
//             }
//         };
//         // generate email
//         const emailBody = mailGenerator.generate(emailTemplate);
//         // send email
//         const message = {
//             from : EMAIL,
//             to: email,
//             subject: 'Welcome to Career Pulse',
//             html: emailBody
//         }
//         // const emailText = mailGenerator.generatePlaintext(emailTemplate);
//         const mailOptions = {
//             from: EMAIL,
//             to: email,
//             subject: 'Welcome to Career Pulse',
//             html: emailBody,
//             text: emailText
//         };
//         transporter.sendMail(mailOptions).then(()=>{
//             return res.status(201).json({
//                 msg: "you should receive an email"
//             })
//         }).catch(error=>{
//             return res.json({
//                 error: "Something went wrong"
//             })
//         })
        
        

//     } catch(error){
//         return res.json({
//             error: "Something went wrong"
//         })
//     }
// }

// module.exports = {
//     sendRegConfirm
// }

// const sendRegConfirm = async (req, res) => {
//     try{
//         const{userEmail} = req.body;
//         const email = userEmail;

//         const exist = await User.findOne({email});
//         console.log(userEmail);
//         if (!exist){
//             return res.json({
//                 error: 'email not found'
//             })
//         }

//         console.log(exist.firstName, exist.lastName);

//         const transportor = nodemailer.createTransport({
//             service:'gamil',
//             auth:{
//                 user:EMAIL,
//                 pass:PASSWORD
//             }
//         });

//         const MailGenerator = new Mailgen({
//             theme:'cerberus',
//             product:{
//                 name:'Career Pulse',
//                 link:'https://www.iit.ac.lk/'
//             }
//         });
//         let response = {
//             body: {
//                 name : "Daily Tuition",
//                 intro: "Your bill has arrived!",
//                 table : {
//                     data : [
//                         {
//                             item : "Nodemailer Stack Book",
//                             description: "A Backend application",
//                             price : "$10.99",
//                         }
//                     ]
//                 },
//                 outro: "Looking forward to do more business"
//             }
//         }
//         const mail =MailGenerator.generate(response);
    
//         const message = {
//             from:EMAIL,
//             to:userEmail,
//             subject:'Welcome to Career Pulse',
//             html:mail
//         };
    
//         transportor.sendMail(message).then(() => {
//             return res.status(201).json({
//                 msg: "you should receive an email"
//             })
//         }).catch(error => {
//             return res.status(500).json({ error })
//         })
//         return res.json({error: "Something went wrong"});
//     }

//     catch(error){
//         console.log(error);
//     }
// }

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
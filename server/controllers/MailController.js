const nodemailer =require('nodemailer')
const sendEmail = async ({ email, subject, message }) => {
    try {
        // Create transporter
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "vinujividusini@gmail.com",
                pass: "mestrvbwhtvczbdm"
            }
        });

        // Mail configurations
        const mailConfig = {
            from: "vinujividusini@gmail.com",
            to: email,
            subject: subject,
            html: `
            <p>${message}</p>
            <p>Best Regards</p>
            `,
        };

        // Send mail
        await transporter.sendMail(mailConfig);
        return { message: "Email sent successfully" };
    } catch (error) {
        console.log(error);
        throw { message: `An error occurred` };
    }
};

module.exports = {
    sendEmail
}
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nurzhanmomynov01@gmail.com',
        pass: 'xfnqiwgyovytophg'
    }
});

function sendEmail(to, subject, text) {
    const mailOptions = {
        from: 'nurzhanmomynov01@gmail.com',
        to: to,
        subject: subject,
        text: text,
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}

module.exports = sendEmail;

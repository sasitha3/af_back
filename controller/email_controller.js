/**
 * Created by PAVANI on 7/2/2017.
 */
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sasitha.premadasa@my.sliit.lk',
        pass: 'sasitha.3'
    }
});

var mailOptions = {
    from: 'sasithasa@gmail.com',
    to: 'sasitha.premadasa@my.sliit.lk',
    subject: '',
    text: 'Message'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

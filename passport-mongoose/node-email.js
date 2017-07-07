var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'java.gdb@gmail.com',
    pass: 'pi=3.1415'
  }
});

var mailOptions = {
  from: 'java.gdb@gmail.com',
  to: 'wudi.lab@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

const nodemailer = require('nodemailer');

function sendMail(request, response, newPassword) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'hypechat.team@gmail.com',
      pass: 'taller21c2019'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: 'hypechat.team@gmail.com',
    to: request.body.email,
    subject: 'HypeChat password restoration',
    text: 'New password: ' + newPassword
  };


  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      response.send(500, error.message);
    } else {
      response.status(200).send('New password sent to ' + request.body.email);
    }
  });
};

exports.sendMail = sendMail;

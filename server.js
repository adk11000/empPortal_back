const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});

const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'khetanzone2@gmail.com',
        pass: 'virat10000ak'
    }
});

app.post('/example', (req, res) => {

  const mailDetails = {
    from: 'khetanzone2@gmail.com',
    to: req.body.memId,
    subject: 'Test mail',
    text: 'Hello ' + req.body.memGen +' '+ req.body.memName + ', one of your ' + req.body.memType + ' who is an employee at our organisation has recommend your for our product.'
};
  
Transporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});
});


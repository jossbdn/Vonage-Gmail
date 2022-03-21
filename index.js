const express = require('express')
const app = express()
const nodemailer = require('nodemailer')

const dotenv = require('dotenv')
dotenv.config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GAUTH,
    pass: process.env.GPASSWORD
  }
})

app.get('/', function (req, res){

  res.statusCode = 200
  res.end('Hello World')

})

app.get('/webhooks/inbound-sms', (req, res) => {

  const mailOptions = {
    from: process.env.GAUTH,
    to: process.env.MAIL_TO,
    subject: '🍟 YOU HAVE A NEW SMS 🍟',
    text: req.query.text,
  }

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error)
    } else {
      console.log('email sent')
    }
  })

  res.sendStatus(204)

})

app.listen(process.env.PORT || 5000, function(){
  console.log('runing on port ' + process.env.PORT)
})
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

  const from = req.query.msisdn
  const to = req.query.to
  const text = req.query.text

  const nexmo_res = {
    msisdn: from,
    to: to,
    text: text
  }

  console.log(process.env.MAIL_USER + process.env.MAIL_PASSWORD)

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_TO,
    subject: 'NEXMO || INCOME SMS',
    text: text
  }

  sgMail.send(mailOptions)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

  console.log(nexmo_res)

  res.sendStatus(204)

})

app.listen(process.env.PORT || 5000, function(){
  console.log('runing on port ' + process.env.PORT)
})
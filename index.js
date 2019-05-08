const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
})

app.get('/', function (req, res){
  res.send('Hello World!')
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
    from: process.env.MAIL_USER + '<'+process.env.MAIL_PASSWORD+'>',
    to: process.env.MAIL_TO,
    subject: 'NEXMO || INCOME SMS',
    text: text
  }

  transporter.sendMail(mailOptions, function(err, info){
    if(err)
      console.log(err)
  })

  console.log(nexmo_res)

  res.sendStatus(204)

})

app.listen(3000, function(){
  console.log('runing on port ' + process.env.PORT)
})
const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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
    from: 'test@example.com',
    to: process.env.MAIL_TO,
    subject: 'NEXMO || INCOME SMS',
    text: text
  }

  sgMail.send(mailOptions)

  console.log(nexmo_res)

  res.sendStatus(204)

})

app.listen(process.env.PORT || 5000, function(){
  console.log('runing on port ' + process.env.PORT)
})
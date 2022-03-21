<p align="center">
  <a href="https://example.com/">
    <img src="https://image.noelshack.com/fichiers/2022/12/1/1647865048-vonage.jpg" alt="Logo" width=72 height=72>
  </a>

  <h3 align="center">Vonage & Gmail</h3>

  <p align="center">
    Receive your SMS with <b>Gmail</b>!
    <br>
    <a href="https://github.com/jossbdn/Vonage-Gmail/issues">Report bug</a>
    ·
    <a href="https://github.com/jossbdn/Vonage-Gmail/discussions/1">Request feature</a>
  </p>
</p>

# Getting Started

Here is the list of services you need to use <u>Nexmo SMS Receiver</u> :
- [NODEJS](https://nodejs.org/en/)
- [Vonage (ByNexmo)](https://www.vonage.fr/)
- [Gmail](https://mail.google.com/)
- Any host you want (I use [Heroku](heroku.com))

# Installation

Install the project following these git commands.

```
$ git clone https://github.com/jossbdn/Vonage-Gmail.git
$ npm install
```

# Configuration
## 1. Get environnment variables

Configure your environnment variables based on .<b>env.exemple</b> file in main directory.

<ul>
    <li>
        <p>
            <b>MAIL_TO</b>
            <br>Email address you want to use to receive SMS.
        </p>
    </li>
    <li>
        <p>
            <b>GAUTH</b>
            <br>Email address you want to use to receive SMS.
        </p>
    </li>
    <li>
        <p>
            <b>GPASSWORD</b>
            <br>Password you have to get in your <a href="https://myaccount.google.com/security">Google Account</a> in the <i>Security</i> section by clicking on <i>Applications Password</i>
        </p>
    </li>
</ul>

## 2. Setting up environnment variables

### <b>Local</b>
If you are running the project on local to test it, you can copy / paste <i>.env.exemple</i> and renaming it to <i>.env</i>.

### <b>Production usage</b>
For a production usage, just get into variables manager in your host service.

## 3. Vonage webhook
Before receive your SMS, you have to configure <i>Vonage webhook</i> to send SMS body to your email service. 

Get into your <b><i>API Settings</i></b> in your <b><i>Vonage Dashboard</i></b> and set SMS Settings to following instructions :
<ul>
    <li>Switch <b><i>SMS Settings</i></b> on <b><i>SMS API</i></b></li>
    <li>Set <b><i>Webhook format</i></b> on <b><i>GET</i></b></li>
    <li>Set <b><i>Inbound SMS webhooks</i></b> on http://yourapp.com/webhooks/inbound-sms</li>
</ul>

<i>Don't forget to save changes so you can start to buy numbers!</i>

# Run

Run the project when all it's setup on <i>Local</i> or <i>production</i> and start to receive your SMS!

```
$ npm run go
```
<i>If you want to test your webhook incode request, you can use postman to make requests on your local project.</i>
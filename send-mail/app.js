const nodemailer = require('nodemailer')
const mailauth = require('./mailauth')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: mailauth.user,
        pass: mailauth.password
    }
})

var mailOptions = {
    from: 'muhammedanas4140@gmail.com',
    to: 'anasm5211@gmail.com',
    subject: 'Sending Email using Nodejs',
    text: 'That was easy 2'
}

transporter.sendMail(mailOptions, (err, info) => {
    (err) ? console.log(err) : console.log(info.response)
})
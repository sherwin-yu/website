const express = require('express');
const Sendgrid = require('../models/Sendgrid');

const router = express.Router();

const sendMail = (req, res) => {
  console.log('req.body', req.body);
  const body = {
    to: 'sherwinhyu@gmail.com',
    from: req.body.email,
    subject: req.body.subject,
    text: req.body.message,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  };
  return Sendgrid.sendMail(body)
    .then(response => res.json(response))
    .catch(err => res.send(err));
};

router.post('/api/mail', sendMail);

module.exports = router;

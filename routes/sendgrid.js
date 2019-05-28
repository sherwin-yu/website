const express = require('express');
const Sendgrid = require('../models/Sendgrid');

const router = express.Router();

const sendMail = (req, res) =>
  Sendgrid.sendMail(req.body)
    .then(response => res.json(response))
    .catch(err => res.send(err));

router.post('/api/mail', sendMail);

module.exports = router;

require('dotenv').config();
const rp = require('request-promise');

const { SENDGRID_API_KEY } = process.env;

const headers = {
  Authorization: `Bearer ${SENDGRID_API_KEY}`,
  'content-type': 'application/json'
};

const sendMail = body =>
  rp({
    method: 'POST',
    uri: `https://api.sendgrid.com/v3/mail/send`,
    headers,
    body
  });

module.exports = {
  sendMail
};

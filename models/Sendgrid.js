require('dotenv').config();
// const rp = require('request-promise');
const sendgrid = require('@sendgrid/mail');

const { SENDGRID_API_KEY } = process.env;

const sendMail = body => {
  sendgrid.setApiKey(SENDGRID_API_KEY);
  sendgrid.send(body);
};

module.exports = {
  sendMail
};

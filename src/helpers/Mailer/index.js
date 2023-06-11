const nodeMailer = require('nodemailer');

const Mailer = require('./Mailer')
const NodeMailer = require('./Node-mailer');

module.exports = new Mailer(new NodeMailer(nodeMailer));
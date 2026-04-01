const nodemailer = require('nodemailer');
const config = require('../config/config');
const logger = require('../config/logger');
const { ResetPassword, ApprovalMail, RejectedMail, OtpMail } = require('../mail-templates');

const transport = nodemailer.createTransport(config.email.smtp);

if (config.env !== 'test') {
  transport
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() => logger.warn('Unable to connect to email server. Make sure SMTP settings are correct'));
}

/**
 * Core send helper — all email functions route through here.
 */
const sendEmail = async (to, subject, html) => {
  logger.info('Email sent to ' + to);
  const msg = { from: config.email.from, to, subject, html };
  await transport.sendMail(msg);
};

const sendResetPasswordEmail = async (to, token, origin = '') => {
  const subject = 'Reset password';
  const resetPasswordUrl = `${origin}/set-new-password?token=${token}`;
  const html = ResetPassword(resetPasswordUrl);
  await sendEmail(to, subject, html);
};

const sendApprovalEmail = async (to, email, name, password) => {
  const subject = 'Welcome — Your account has been approved';
  const html = ApprovalMail(email, name, password);
  await sendEmail(to, subject, html);
};

const sendRejectionEmail = async (to, name) => {
  const subject = 'Account application update';
  const html = RejectedMail(name);
  await sendEmail(to, subject, html);
};

const sendOtpEmail = async (to, otp) => {
  const subject = 'Your OTP code';
  const html = OtpMail(otp);
  await sendEmail(to, subject, html);
};

module.exports = {
  sendEmail,
  sendResetPasswordEmail,
  sendApprovalEmail,
  sendRejectionEmail,
  sendOtpEmail,
};

module.exports = (from,to,sub,text) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey('');
  const msg = {
    to: to,
    from: from,
    subject: sub,
    text: text,

  };
  sgMail.send(msg);

}

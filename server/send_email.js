module.exports = (from,to,sub,text,cc) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey('');
  const msg = {
    to: to,
    cc: cc,
    from: from,
    subject: sub,
    text: text,

  };
  sgMail.send(msg);

}

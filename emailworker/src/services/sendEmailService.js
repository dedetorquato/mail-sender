const nodemailer = require("nodemailer");
const sendEmail = async (data) => {
  try {
    const name = data.name;
    const email = data.email;
    const subject = data.subject;
    const msg = `
        <p>Hy <b>${name} - ${email}</b></p>
        <p>
          ${data.message}
        </p>
      `;
    await send(process.env.EMAIL_SENDER, email, subject, msg);
    return;
  } catch (error) {
    console.log(error);
    throw `send email error - ${error}`;
  }
};
const send = async (emailFrom, emailTo, subject, msg) => {

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST_SMTP,
      secure: process.env.SMTP_SECURE,
      port: process.env.PORT_SMTP,
      auth: {
        user: emailFrom,
        pass: process.env.EMAIL_SENDER_PASSWORD,
      },
    });
    const mailOptions = {
      from: emailFrom,
      to: emailTo,
      subject: subject,
      html: msg,
    };
    await transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(emailTo + " - ", err);
      }
      if (info) {
        console.log(info.accepted, info.rejected);
      }
    });
    return;
  } catch (error) {
    console.log(error);
    throw `send error - ${error}`;
  }
};

module.exports = {
  sendEmail,
  send,
};

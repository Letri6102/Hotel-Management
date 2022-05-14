require("dotenv").config();
import nodemailer from "nodemailer";

let sendSimpleEmail = async (dataSend) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP, // generated ethereal user
      pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
    },
  });

  //send mail with defined transport object
  let info = await transporter.sendMail({
    from: "Admin <letri6102@gmail.com>",
    to: dataSend.receiverEmail,
    subject: "Thông tin đặt phòng",
    html: getBodyHTMLEmail(dataSend),
  });
};

let getBodyHTMLEmail = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `
    <h2>Chào bạn, ${dataSend.customerName}!</h2>
    <p>Bạn nhận được email này vì bạn đã đặt phòng online trên trang Booking.com của chúng tôi!</p>
    <p>Thông tin đặt phòng:</p>
    <div><b>Thời gian:${dataSend.time}</b></div>

    <p>Nếu các thông tin trên là đúng, vui lòng click vào đường link bên dưới để xác nhận và hoàn tất thủ tục đặt phòng.</p>
    <div>
    <a href=${dataSend.redirectLink} target="_blank">Click here!</a></div>

    <div>Xin chân thành cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi!</div>
    `;
  }
  if (dataSend.language === "en") {
    result = `
        <h2>Hello, ${dataSend.customerName}!</h2>
        <p>You received this email because you booked an online!</p>
        <p>Information:</p> 
        <div><b>Time:${dataSend.time}</b></div>

        <p>If the above information is true, please click on the link below to confirm</p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here!</a></div>

        <div>Sincerely thank!</div>
        `;
  }
  return result;
};

module.exports = {
  sendSimpleEmail: sendSimpleEmail,
};

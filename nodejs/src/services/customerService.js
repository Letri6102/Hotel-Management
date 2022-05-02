import db from "../models/index";
require("dotenv").config();

let postBookAppointment = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email || !data.roomId || !data.timeType || !data.date) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameters",
        });
      } else {
        let user = await db.User.findOrCreate({
          where: { email: data.email },
          defaults: {
            email: data.email,
            roleId: "R3",
          },
        });
        console.log("check user: ", user[0]);
        if (user && user[0]) {
          await db.Booking.findOrCreate({
            where: { customerId: user[0].id },
            defaults: {
              statusId: "S1",
              roomId: data.roomId,
              customerId: user[0].id,
              date: data.date,
              timeType: data.timeType,
            },
          });
        }
      }
      resolve({
        errCode: 0,
        errMessage: "Success",
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  postBookAppointment: postBookAppointment,
};

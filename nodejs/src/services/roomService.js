import db from "../models/index";
require("dotenv").config();
import _ from "lodash";

const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;

let getTopRoomHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        limit: limitInput,
        where: { roleId: "R2" },
        order: [["createdAt", "DESC"]],
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: db.Allcode,
            as: "positionData",
            attributes: ["valueEn", "valueVi"],
          },
          {
            model: db.Allcode,
            as: "genderData",
            attributes: ["valueEn", "valueVi"],
          },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: users,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getAllRooms = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let rooms = await db.User.findAll({
        where: { roleId: "R2" },

        attributes: {
          exclude: ["password"],
        },
      });
      resolve({
        errCode: 0,
        data: rooms,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let saveDetailInforRoom = (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !inputData.roomId ||
        !inputData.contentHTML ||
        !inputData.contentMarkdown ||
        !inputData.action
      ) {
        resolve({
          errCode: 1,
          message: "Please input all field",
        });
      } else {
        if (inputData.action === "CREATE") {
          await db.Markdown.create({
            contentHTML: inputData.contentHTML,
            contentMarkdown: inputData.contentMarkdown,
            description: inputData.description,
            roomId: inputData.roomId,
          });
        } else if (inputData.action === "EDIT") {
          let roomMarkdown = await db.Markdown.findOne({
            where: { roomId: inputData.roomId },
            raw: false,
          });
          if (roomMarkdown) {
            roomMarkdown.contentHTML = inputData.contentHTML;
            roomMarkdown.contentMarkdown = inputData.contentMarkdown;
            roomMarkdown.description = inputData.description;
            roomMarkdown.updateAt = new Date();
            await roomMarkdown.save();
          }
        }
        resolve({
          errCode: 0,
          errMessage: "Save info success",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getDetailRoomById = (inputId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!inputId) {
        resolve({
          errCode: 1,
          message: "Please input all field",
        });
      } else {
        let data = await db.User.findOne({
          where: {
            id: inputId,
          },
          attributes: {
            exclude: ["password"],
          },
          include: [
            {
              model: db.Markdown,
              attributes: ["description", "contentHTML", "contentMarkdown"],
            },
            {
              model: db.Allcode,
              as: "positionData",
              attributes: ["valueEn", "valueVi"],
            },
          ],
          raw: false,
          nest: true,
        });
        if (data && data.image) {
          data.image = new Buffer(data.image, "base64").toString("binary");
        }
        if (!data) data = {};
        resolve({
          errCode: 0,
          data: data,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let bulkCreateSchedule = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.arrSchedule || !data.roomId || !data.formatedDate) {
        resolve({
          errCode: 1,
          message: "Please input all field",
        });
      } else {
        let schedule = data.arrSchedule;
        if (schedule && schedule.length > 0) {
          schedule = schedule.map((item) => {
            item.maxNumber = MAX_NUMBER_SCHEDULE;
            return item;
          });
        }
        // console.log("check schedule", schedule);
        // await db.Schedule.bulkCreate(schedule);
        //get all existing data
        let existing = await db.Schedule.findAll({
          where: { roomId: data.roomId, date: data.formatedDate },
          attributes: ["timeType", "date", "roomId", "maxNumber"],
          raw: true,
        });
        //convert date
        if (existing && existing.length > 0) {
          existing = existing.map((item) => {
            item.date = new Date(item.date).getTime();
            return item;
          });
        }
        //compare different
        let toCreate = _.differenceWith(schedule, existing, (a, b) => {
          return a.timeType === b.timeType && a.date === b.date;
        });
        //create data
        if (toCreate && toCreate.length > 0) {
          await db.Schedule.bulkCreate(toCreate);
        }
        resolve({
          errCode: 0,
          errMessage: "OK",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getScheduleByDate = (roomId, date) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!roomId || !date) {
        resolve({
          errCode: 1,
          errMessage: "Please input all field",
        });
      } else {
        let dataSchedule = await db.Schedule.findAll({
          where: {
            roomId: roomId,
            date: date,
          },
        });
        if (!dataSchedule) {
          dataSchedule = [];
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  getTopRoomHome: getTopRoomHome,
  getAllRooms: getAllRooms,
  saveDetailInforRoom: saveDetailInforRoom,
  getDetailRoomById: getDetailRoomById,
  bulkCreateSchedule: bulkCreateSchedule,
  getScheduleByDate: getScheduleByDate,
};

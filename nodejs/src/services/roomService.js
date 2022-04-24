import db from "../models/index";

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
        !inputData.contentMarkdown
      ) {
        resolve({
          errCode: 1,
          message: "Please input all field",
        });
      } else {
        await db.Markdown.create({
          contentHTML: inputData.contentHTML,
          contentMarkdown: inputData.contentMarkdown,
          description: inputData.description,
          roomId: inputData.roomId,
        });
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
            exclude: ["password", "image"],
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
          raw: true,
          nest: true,
        });
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

module.exports = {
  getTopRoomHome: getTopRoomHome,
  getAllRooms: getAllRooms,
  saveDetailInforRoom: saveDetailInforRoom,
  getDetailRoomById: getDetailRoomById,
};

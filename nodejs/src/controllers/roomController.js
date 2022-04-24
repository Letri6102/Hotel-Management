import roomService from "../services/roomService";

let getTopRoomHome = async (req, res) => {
  let limit = req.query.limit || 10;
  // if (!limit) limit = 10;
  console.log("limit", limit);
  try {
    let response = await roomService.getTopRoomHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server...",
    });
  }
};

let getAllRooms = async (req, res) => {
  try {
    let rooms = await roomService.getAllRooms();
    return res.status(200).json(rooms);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server...",
    });
  }
};

let postInforRoom = async (req, res) => {
  try {
    let response = await roomService.saveDetailInforRoom(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server...",
    });
  }
};

let getDetailRoomById = async (req, res) => {
  try {
    let infor = await roomService.getDetailRoomById(req.query.id);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server...",
    });
  }
};

module.exports = {
  getTopRoomHome: getTopRoomHome,
  getAllRooms: getAllRooms,
  postInforRoom: postInforRoom,
  getDetailRoomById: getDetailRoomById,
};
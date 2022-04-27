import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (inputId) => {
  return axios.get(`api/get-all-users?id=${inputId}`);
};

const createNewUserService = (data) => {
  console.log("check data from service", data);
  return axios.post("api/create-new-user", data);
};

const deleteUserService = (userId) => {
  console.log("check id to delete user", userId);
  return axios.delete("api/delete-user", {
    data: {
      id: userId,
    },
  });
};

const editUserService = (inputData) => {
  return axios.put("api/edit-user", inputData);
};

const getAllCodeService = (inputType) => {
  return axios.get(`api/allcode?type=${inputType}`);
};

const getTopRoomHomeService = (limit) => {
  return axios.get(`api/top-room-home?limit=${limit}`);
};

const getAllRooms = () => {
  return axios.get(`api/get-all-rooms`);
};

const saveDetailRoomService = (data) => {
  return axios.post("api/save-info-rooms", data);
};

const getDetailInforRooms = (inputId) => {
  return axios.get(`api/get-detail-room-by-id?id=${inputId}`);
};

const saveBulkScheduleRoom = (data) => {
  return axios.post("api/bulk-create-schedule", data);
};

export {
  handleLoginApi,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
  getAllCodeService,
  getTopRoomHomeService,
  getAllRooms,
  saveDetailRoomService,
  getDetailInforRooms,
  saveBulkScheduleRoom,
};

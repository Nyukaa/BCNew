import axios from "axios";
const baseUrl = "/api/notes";

//add token
let token = null;
const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
// const getAll = () => {
//   const request = axios.get(baseUrl);
//   return request.then((response) => response.data);
// };

// const create = async (newObject) => {
//   try {
//     const response = await axios.post(baseUrl, newObject);
//     return response.data;
//   } catch (error) {
//     throw error.response.data.error; // ✅ бросаем сообщение от бэкенда
//   }
// };

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token }, // токен текущего пользователя
  };
  console.log("Creating note with token:", token);
  console.log("Note data:", newObject);
  try {
    const response = await axios.post("/api/notes", newObject, config);
    return response.data;
  } catch (error) {
    console.log("Error from backend:", error.response?.data); // <- добавим для дебага
    throw error.response?.data?.error || "Unknown error";
  }
};

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};
// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject);
//   return request.then((response) => response.data);
// };

export default {
  getAll,
  create,
  update,
  setToken,
};

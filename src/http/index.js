import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000";
axios.defaults.headers["Content-Type"] = "application/json";

export const uploadError = data => {
  console.log("xxx", data);
  axios
    .post("/upload", JSON.stringify(data))
    .then(res => {
      console.log("upload res", res);
    })
    .catch(err => {
      console.log("upload error", err);
    });
};

export const getList = () =>
  axios
    .get("/errors")
    .then(res => res.data.data)
    .catch(err => []);

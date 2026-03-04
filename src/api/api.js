import axios from "axios";

const api = axios.create({
  baseURL: "https://tentenpanda-react.onrender.com",
  timeout: 10000,
});

export default api;

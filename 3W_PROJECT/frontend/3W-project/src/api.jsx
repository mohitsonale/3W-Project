import axios from "axios";

const API = axios.create({
  baseURL: "https://threew-project.onrender.com/api"
});

export default API;

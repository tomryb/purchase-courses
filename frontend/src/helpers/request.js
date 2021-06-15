import axios from "axios";

const request = axios.create({
  baseURL: "https://awesome-turing-7e67d2.netlify.app/",
  validateStatus: false
});

export default request;

import axios from "axios";

const API_URL = "https://tr-react-project.herokuapp.com/";

const request = axios.create({
  baseURL: API_URL,
  validateStatus: false
});

export default request;

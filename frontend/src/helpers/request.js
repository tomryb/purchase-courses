import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const request = axios.create({
  baseURL: API_URL,
  validateStatus: false
});

export default request;

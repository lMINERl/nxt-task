import axios from "axios";

const axios_config = axios.create({
  baseURL: "https://qa-testing-backend-293b1363694d.herokuapp.com/api/v3/",
});

export default axios_config;

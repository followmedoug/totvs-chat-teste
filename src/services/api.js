import axios from "axios";

const { REACT_APP_BASEURL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_BASEURL,
});

api.interceptors.response.use(
  async (response) => {
    return response;
  },
  async function (error) {
    return error.response;
  }
);

export default api;

import axios from "axios";

const { REACT_APP_BASEURL, REACT_APP_BASEURL_STG, REACT_APP_BASEURL_PRD } =
  process.env;

const env = window.location.hostname.split(".")[1];

const api = axios.create({
  baseURL: !env
    ? REACT_APP_BASEURL
    : env === "stg"
    ? REACT_APP_BASEURL_STG
    : REACT_APP_BASEURL_PRD,
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

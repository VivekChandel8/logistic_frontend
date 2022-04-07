import axios from "axios";
import { api_endpoint } from "../common";

const axiosInstance = axios.create({
  baseURL: api_endpoint,
});

// Send a POST request
const postRequest = async (url, data) => {
  return axiosInstance({
    method: "post",
    url,
    data,
  });
};

// Send a GET request
const getRequest = async (url) => {
  return axiosInstance({
    method: "get",
    url,
  });
};

export { postRequest, getRequest };

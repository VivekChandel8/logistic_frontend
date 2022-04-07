import { api_endpoint } from "../common";
import { getRequest, postRequest } from "./AxiosUtils";

export const getAllData = async () => {
  return await getRequest(`${api_endpoint}/logistic/getAll`);
};

export const updateData = async (obj) => {
  return await postRequest(`${api_endpoint}/logistic/update`, obj);
};

export const createData = async (obj) => {
  return await postRequest(`${api_endpoint}/logistic/create`, obj);
};

export const deleteData = async (id) => {
  return await getRequest(`${api_endpoint}/logistic/delete?id=${id}`);
};

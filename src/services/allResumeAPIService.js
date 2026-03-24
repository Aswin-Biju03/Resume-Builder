import apiService from "../api/apiService";

export const addResumeAPI = async (resumeData) => {
  return await apiService("POST", "/allresumes", resumeData);
};

export const getResumeAPI = async (id) => {
  return await apiService("GET", `/allresumes/${id}`, {});
};

export const downloadResumeAPI = async (resumeData) => {
  return await apiService("POST", `/downloads`, resumeData);
};

export const getDownloadResumeAPI = async () => {
  return await apiService("GET", `/downloads`, {});
};

export const deleteDownloadResumeAPI = async (resumeId) => {
  return await apiService("DELETE", `/downloads/${resumeId}`, {});
};

export const editResumeAPI = async (id,updateDetails) => {
  return await apiService("PUT", `/allresumes/${id}`, updateDetails);
};
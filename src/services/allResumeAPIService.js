import apiService from "../api/apiService";

export const addResumeAPI = async (resumeData) => {
  return await apiService("POST", "/allresumes", resumeData);
};

export const getResumeAPI = async (id) => {
  return await apiService("GET",`/allresumes/${id}`, {});
};

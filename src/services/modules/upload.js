import request from "../request";

export const uploadImageApi = (file) => {
  return request.post(`/api/upload/`, { data: file });
};

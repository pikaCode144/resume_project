import request from "../request";

export const getCodeApi = (email) => {
  return request.post('/api/user/code', { data: { email } });
};

export const userRegister = (values) => {
  return request.post('/api/user/register', { data: values });
};

export const userLogin = (values) => {
  return request.post('/api/user/login', { data: values });
};

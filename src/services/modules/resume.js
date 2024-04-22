import request from "../request";

export const createResumeApi = () => {
  return request.post('/api/resume/create');
};

export const templateCreateResumeApi = (id) => {
  return request.post(`/api/resume/template/${id}`);
};

export const getResumeAllInfoApi = (id) => {
  return request.get(`/api/resume/allInfo/${id}`);
};

export const getResumeThemeApi = (id) => {
  return request.get(`/api/resume/theme/${id}`);
};

export const updateResumeThemeApi = (id, resumeTheme) => {
  return request.put(`/api/resume/theme/${id}`, { data: { resumeTheme } });
};

export const resetResumeThemeApi = (id) => {
  return request.put(`/api/resume/theme/reset/${id}`);
};

export const getResumeListApi = () => {
  return request.get('/api/resume/list');
};

export const deleteResumeApi = (id) => {
  return request.delete(`/api/resume/${id}`);
};

export const updateResumeTitleApi = (id, resumeTitle) => {
  return request.put(`/api/resume/title/${id}`, { data: { resumeTitle } });
};

export const updateResumePublicApi = (id, resumePublic) => {
  return request.put(`/api/resume/public/${id}`, { data: { resumePublic } });
};

export const updateResumeDetailsApi = (id, resumeDetails) => {
  return request.put(`/api/resume/details/${id}`, { data: { resumeDetails } });
};

export const updateResumeImgUrlApi = (id, resumeImgUrl) => {
  return request.put(`/api/resume/resume-img-url/${id}`, { data: { resumeImgUrl } });
};

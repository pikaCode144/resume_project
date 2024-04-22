import request from '../request';

export const getTemplateListApi = () => {
  return request.get('/api/template/list');
};

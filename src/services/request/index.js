import axios from "axios";
import { BASE_URL, TIMROUT } from "./config";

class Request {
  constructor(baseURL, timeout = 5000) {
    this.instance = axios.create({
      baseURL,
      timeout
    });

    this.instance.interceptors.request.use(config => {
      const user = JSON.parse(localStorage.getItem('userInfo'));
      if (user) {
        const { token } = user;
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.instance.interceptors.response.use(res => {
      return res.data;
    }, err => {
      return err;
    });
  }

  request(config) {
    return this.instance.request(config);
  }

  get(url, config) {
    return this.request({ ...config, url, method: 'get' });
  }

  post(url, config) {
    return this.request({ ...config, url, method: 'post' });
  }

  put(url, config) {
    return this.request({ ...config, url, method: 'put' });
  }

  delete(url, config) {
    return this.request({ ...config, url, method: 'delete' });
  }
}

const request = new Request(BASE_URL, TIMROUT);

export default request;
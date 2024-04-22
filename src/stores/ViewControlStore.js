import { makeObservable, observable, action } from 'mobx';
import { getResumeThemeApi, updateResumeThemeApi, resetResumeThemeApi } from '@/services';

const initialState = {
  fontFamily: 'Microsoft YaHei',
  fontSize: 16,
  padding: 20,
  lineHeight: 24,
  color: '#446ef6',
};

class ViewControlStore {
  state = initialState;

  constructor() {
    makeObservable(this, {
      state: observable,
      setFontFamily: action,
      setFontSize: action,
      setPadding: action,
      setLineHeight: action,
      setColor: action,
      reset: action,
    });
  }

  fetchResumeTheme = async (id) => {
    const res = await getResumeThemeApi(id);
    if (res.code !== 200) {
      throw new Error(res.message);
    }
    this.state = { ...res.data };
  };

  saveTheme = async (id) => {
    const res = await updateResumeThemeApi(id, this.state);
    if (res.code !== 200) {
      throw new Error(res.message);
    }
    return res;
  };

  resetTheme = async (id) => {
    const res = await resetResumeThemeApi(id);
    if (res.code !== 200) {
      throw new Error(res.message);
    }
    this.state = { ...initialState };
    return res;
  };

  setFontFamily = (value) => {
    this.state.fontFamily = value;
  };

  setFontSize = (value) => {
    this.state.fontSize = value;
  };

  setPadding = (value) => {
    this.state.padding = value;
  };

  setLineHeight = (value) => {
    this.state.lineHeight = value;
  };

  setColor = (value) => {
    this.state.color = value;
  };

  reset = () => {
    this.state = initialState;
  };
}

export default ViewControlStore;

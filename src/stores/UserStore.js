import { makeObservable, observable, action } from 'mobx';

class ViewControlStore {
  userInfo = JSON.parse(localStorage.getItem('userInfo')) || null;

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      login: action,
      logout: action,
    });
  }

  login = (data) => {
    this.userInfo = data;
    localStorage.setItem('userInfo', JSON.stringify(data));
  };

  logout = () => {
    this.userInfo = null;
    localStorage.removeItem('userInfo');
  }
}

export default ViewControlStore;

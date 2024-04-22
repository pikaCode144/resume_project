import React from 'react';
import ViewControlStore from './ViewControlStore';
import ResumeInfoStore from './ResumeInfoStore';
import UserStore from './UserStore';

export const stores = {
  viewControlStore: new ViewControlStore(),
  resumeInfoStore: new ResumeInfoStore(),
  userStore: new UserStore(),
};

export const storesContext = React.createContext(stores);

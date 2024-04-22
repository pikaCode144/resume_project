import { makeObservable, observable, computed, action, runInAction } from 'mobx';
import { message } from 'antd';
import { getResumeAllInfoApi, updateResumeDetailsApi } from '@/services';

class ResumeInfoStore {
  resumeTitle = '';
  publicTemplate = false;
  resumeDetails = {};

  constructor() {
    makeObservable(this, {
      resumeTitle: observable,
      publicTemplate: observable,
      resumeDetails: observable.deep,
      personInfo: computed,
      education: computed,
      workExperience: computed,
      projectExperience: computed,
      fetchResumeDetails: action,
      setPersonInfo: action,
    });
  };

  get personInfo() {
    return this.resumeDetails.personInfo;
  };

  get education() {
    return this.resumeDetails.education;
  };

  get workExperience() {
    return this.resumeDetails.workExperience;
  };

  get projectExperience() {
    return this.resumeDetails.projectExperience;
  };

  fetchResumeDetails = async (id) => {
    const res = await getResumeAllInfoApi(id);
    runInAction(() => {
      if (res.code !== 200) {
        throw new Error(res.message);
      }
      this.resumeDetails = res.data.resumeDetails;
      this.resumeTitle = res.data.title;
      this.publicTemplate = res.data.public;
    });
  };

  saveResumeDetails = async (id) => {
    console.log(this.resumeDetails);
    const res = await updateResumeDetailsApi(id, this.resumeDetails);
    runInAction(() => {
      if (res.code !== 200) {
        throw new Error(res.message);
      }
    });
  };

  setResumeTitle = (title) => {
    this.resumeTitle = title;
  };

  setPublicTemplate = (publicTemplate) => {
    this.publicTemplate = publicTemplate;
  };

  setPersonInfo = (key, value) => {
    this.resumeDetails.personInfo[key] = value;
  };

  setEducation = (index, key, value) => {
    this.resumeDetails.education[index][key] = value;
  };

  setWorkExperience = (index, key, value) => {
    this.resumeDetails.workExperience[index][key] = value;
  };

  setProjectExperience = (index, key, value) => {
    this.resumeDetails.projectExperience[index][key] = value;
  }
};

export default ResumeInfoStore;

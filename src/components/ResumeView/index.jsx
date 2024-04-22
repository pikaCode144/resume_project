import React from "react";
import { observer } from 'mobx-react';
import { useStores } from '@/hooks/useStores';
import ViewControl from './ViewControl';
import BasicModel from './BasicModel';
import EducationModel from './EducationModel';
import WorkExperienceModel from './WorkExperienceModel';
import ProjectExperienceModel from './ProjectExperienceModel';
import './index.scss';

const ResumeView = () => {
  const { viewControlStore, resumeInfoStore } = useStores();
  const {
    personInfo,
    education,
    workExperience,
    projectExperience,
  } = resumeInfoStore;
  
  return (
    <div className="flex h-full box-border overflow-hidden flex-col gap-3 flex-shrink-0">
      <div className="rounded-none px-5 py-2 bg-white">
        <ViewControl />
      </div>
      <div id="pdf" className="w-[700px] flex-grow overflow-auto rounded-none bg-white"
        style={{
          fontFamily: viewControlStore.state.fontFamily,
          fontSize: `${viewControlStore.state.fontSize}px`,
          padding: `${viewControlStore.state.padding}px`,
          lineHeight: `${viewControlStore.state.lineHeight}px`,
        }}
      >
        {personInfo && <BasicModel />}
        {education && <EducationModel />}
        {workExperience && <WorkExperienceModel />}
        {projectExperience && <ProjectExperienceModel />}
      </div>
    </div>
  );
};

export default React.memo(observer(ResumeView));

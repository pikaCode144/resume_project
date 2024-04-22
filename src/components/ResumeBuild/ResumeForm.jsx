import React from 'react';
import { observer } from 'mobx-react';
import Basic from './Basic';
import Education from './Education';
import WorkExperience from './WorkExperience';
import ProjectExperience from './ProjectExperience';

const ResumeForm = ({ type }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {type === 'personInfo' && <Basic />}
      {type === 'education' && <Education />}
      {type === 'workExperience' && <WorkExperience />}
      {type === 'projectExperience' && <ProjectExperience />}
    </div>
  )
};

export default React.memo(observer(ResumeForm));

import React from 'react';
import _ from 'lodash';
import { observer } from 'mobx-react';
import { useStores } from '@/hooks/useStores';
import TitleView from '@/components/basic/TitleView';
import markdownit from 'markdown-it';

const md = markdownit();

const WorkExperienceModel = () => {
  const { viewControlStore, resumeInfoStore } = useStores();
  const { state: { color } } = viewControlStore;
  const { workExperience } = resumeInfoStore;

  const [firstWorkExperience] = workExperience;
  const allEmpty = _.every(_.values(_.omit(firstWorkExperience, ['id'])), (value) => value === '');
  if (allEmpty) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <TitleView title="工作经历" color={color} />
      {
        workExperience.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="grid grid-cols-3">
                <div className="font-bold text-[15px]">
                  {item.companyName}
                </div>
                <div className="text-center">
                  {item.departmentName}
                </div>
                <div className="text-end">
                  {item.JobTitle}
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-2">
                  {item.enrollmentPeriod}
                </div>
                <div className="text-end">
                  {item.city}
                </div>
              </div>
              <div
                className="mb-1 break-all"
                dangerouslySetInnerHTML={{
                  __html: md.render(item.description)
                }}
              >
              </div>
            </React.Fragment>
          )
        })
      }
    </div>
  );
};

export default React.memo(observer(WorkExperienceModel));

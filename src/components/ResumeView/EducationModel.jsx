import React from 'react';
import _ from 'lodash';
import { observer } from 'mobx-react';
import { useStores } from '@/hooks/useStores';
import TitleView from '@/components/basic/TitleView';
import { educationLevelMap, educationTypeMap } from '@/constants/options';
import markdownit from 'markdown-it'

const md = markdownit();

const EducationModel = () => {
  const { viewControlStore, resumeInfoStore } = useStores();
  const { state: { color } } = viewControlStore;
  const { education } = resumeInfoStore;

  const [firstEducation] = education;
  const allEmpty = _.every(_.values(_.omit(firstEducation, ['id'])), (value) => value === '');
  if (allEmpty) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <TitleView title="教育经历" color={color} />
      {
        education.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="grid grid-cols-3">
                <div className="font-bold text-[15px]">
                  {item.school}
                </div>
                <div className="text-center">
                  {educationTypeMap[item.educationType]?.label}
                  &nbsp;
                  {educationLevelMap[item.educationLevel]?.label}
                </div>
                <div className="text-end">
                  {item.enrollmentPeriod}
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div>{item.college}</div>
                <div className="text-center">
                  {item.major}
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

export default React.memo(observer(EducationModel));

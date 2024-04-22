import React from 'react';
import { observer } from 'mobx-react';
import ReactMde from 'react-mde';
import { Input, DatePicker, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { useStores } from '@/hooks/useStores';
import { handleEnrollmentPeriod, parseToEnrollmentPeriod } from '@/utils';

const { RangePicker } = DatePicker;

const ProjectExperience = () => {
  const { resumeInfoStore } = useStores();
  const { projectExperience } = resumeInfoStore;

  return (
    <React.Fragment>
      {
        projectExperience.map((item, index) => {
          return <React.Fragment key={index}>
            <div className="flex flex-col gap-2">
              <div>项目名称</div>
              <Input
                type="text"
                value={item.projectTitle}
                onChange={(e) => {
                  resumeInfoStore.setProjectExperience(index, 'projectTitle', e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>担任角色</div>
              <Input
                type="text"
                value={item.role}
                onChange={(e) => {
                  resumeInfoStore.setProjectExperience(index, 'role', e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>工作城市</div>
              <Input
                type="text"
                value={item.city}
                onChange={(e) => {
                  resumeInfoStore.setProjectExperience(index, 'city', e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <div>始末时间</div>
              <ConfigProvider locale={zhCN}>
                <RangePicker
                  picker='month'
                  format="YYYY/MM"
                  value={handleEnrollmentPeriod(item.enrollmentPeriod)}
                  onChange={(value) => {
                    resumeInfoStore.setProjectExperience(index, 'enrollmentPeriod', parseToEnrollmentPeriod(value));
                  }}
                />
              </ConfigProvider>
            </div>
            <div className="flex flex-col gap-2">
              <div>项目链接</div>
              <Input
                type="text"
                value={item.projectLink}
                onChange={(e) => {
                  resumeInfoStore.setProjectExperience(index, 'projectLink', e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2 col-span-3">
              <div>工作详情</div>
              <ReactMde
                value={item.description}
                onChange={(value) => {
                  resumeInfoStore.setProjectExperience(index, 'description', value);
                }}
              />
            </div>
          </React.Fragment>
        })
      }
    </React.Fragment>
  )
};

export default React.memo(observer(ProjectExperience));

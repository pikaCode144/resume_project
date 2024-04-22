import React from 'react';
import { observer } from 'mobx-react';
import ReactMde from 'react-mde';
import { Input, DatePicker, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { useStores } from '@/hooks/useStores';
import { handleEnrollmentPeriod, parseToEnrollmentPeriod } from '@/utils';

const { RangePicker } = DatePicker;

const WorkExperience = () => {
  const { resumeInfoStore } = useStores();
  const { workExperience } = resumeInfoStore;

  return <React.Fragment>
    {
      workExperience.map((item, index) => {
        return <React.Fragment key={index}>
          <div className="flex flex-col gap-2">
            <div>公司名称</div>
            <Input
              type="text"
              value={item.companyName}
              onChange={(e) => {
                resumeInfoStore.setWorkExperience(index, 'companyName', e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>部门名称</div>
            <Input
              type="text"
              value={item.departmentName}
              onChange={(e) => {
                resumeInfoStore.setWorkExperience(index, 'departmentName', e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>岗位名称</div>
            <Input
              type="text"
              value={item.JobTitle}
              onChange={(e) => {
                resumeInfoStore.setWorkExperience(index, 'JobTitle', e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <div>在岗时间</div>
            <ConfigProvider locale={zhCN}>
              <RangePicker
                picker='month'
                format="YYYY/MM"
                value={handleEnrollmentPeriod(item.enrollmentPeriod)}
                onChange={(value) => {
                  resumeInfoStore.setWorkExperience(index, 'enrollmentPeriod', parseToEnrollmentPeriod(value));
                }}
              />
            </ConfigProvider>
          </div>
          <div className="flex flex-col gap-2">
            <div>城市</div>
            <Input
              type="text"
              value={item.city}
              onChange={(e) => {
                resumeInfoStore.setWorkExperience(index, 'city', e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2 col-span-3">
            <div>工作详情</div>
            <ReactMde
              value={item.description}
              onChange={(value) => {
                console.log(value);
                resumeInfoStore.setWorkExperience(index, 'description', value);
              }}
            />
          </div>
        </React.Fragment>
      })
    }
  </React.Fragment>
};

export default React.memo(observer(WorkExperience));

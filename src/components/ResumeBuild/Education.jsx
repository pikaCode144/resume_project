import React from 'react';
import { observer } from 'mobx-react';
import ReactMde from 'react-mde';
import "react-mde/lib/styles/css/react-mde-all.css";
import { Input, Select, DatePicker, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { useStores } from '@/hooks/useStores';
import { educationLevelMap, educationTypeMap } from '@/constants/options';
import { handleEnrollmentPeriod, parseToEnrollmentPeriod } from '@/utils';
// import RichTextEditor from '@/components/basic/RichTextEditor';

const { RangePicker } = DatePicker;

const Education = () => {
  const { resumeInfoStore } = useStores();
  const { education } = resumeInfoStore;
  
  return (
    <React.Fragment>
      {
        education.map((item, index) => {
          return <React.Fragment key={index}>
            <div className="flex flex-col gap-2">
              <div>学校</div>
              <Input
                type="text"
                value={item.school}
                onChange={(e) => {
                  resumeInfoStore.setEducation(index, 'school', e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>学院</div>
              <Input
                type="text"
                value={item.college}
                onChange={(e) => {
                  resumeInfoStore.setEducation(index, 'college', e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>专业</div>
              <Input
                type="text"
                value={item.major}
                onChange={(e) => {
                  resumeInfoStore.setEducation(index, 'major', e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>学历</div>
              <Select
                allowClear
                value={item.educationLevel}
                options={Object.values(educationLevelMap)}
                onChange={(value) => {
                  resumeInfoStore.setEducation(index, 'educationLevel', value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>学历类型</div>
              <Select
                allowClear
                value={item.educationType}
                options={Object.values(educationTypeMap)}
                onChange={(value) => {
                  resumeInfoStore.setEducation(index, 'educationType', value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>所在城市</div>
              <Input
                type="text"
                value={item.city}
                onChange={(e) => {
                  resumeInfoStore.setEducation(index, 'city', e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <div>在读时间</div>
              <ConfigProvider locale={zhCN}>
                <RangePicker
                  picker='month'
                  format="YYYY/MM"
                  value={handleEnrollmentPeriod(item.enrollmentPeriod)}
                  onChange={(value) => {
                    resumeInfoStore.setEducation(index, 'enrollmentPeriod', parseToEnrollmentPeriod(value));
                  }}
                />
              </ConfigProvider>
            </div>
            <div className="flex flex-col gap-2 col-span-3">
              <div>在校经历</div>
              <ReactMde
                value={item.description}
                onChange={(value) => {
                  resumeInfoStore.setEducation(index, 'description', value);
                }}
              />
            </div>
          </React.Fragment>
        })
      }
    </React.Fragment>
  );
};

export default React.memo(observer(Education));

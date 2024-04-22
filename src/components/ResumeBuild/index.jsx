import React, { useEffect, useState } from "react";
import './index.scss';
import { observer } from 'mobx-react';
import { Collapse } from 'antd';
import { useStores } from '@/hooks/useStores';
import { modelIcon } from '@/constants';
import Card from '../basic/Card';
import IconAndLabel from '../basic/IconAndLabel';
import ResumeForm from './ResumeForm';

const ResumeBuild = () => {
  const { resumeInfoStore } = useStores();
  const [ collapseItems, setCollapseItems ] = useState([]);
  const { resumeDetails } = resumeInfoStore;
  
  // 将简历信息进行处理
  useEffect(() => {
    const entries = Object.entries(resumeDetails);
    const list = entries.map(([key, value]) => {
      const { icon, title } = modelIcon[key];
      return {
        ...value,
        label: <IconAndLabel icon={icon} title={title} />,
        children: <ResumeForm type={key} />
      }
    });
    setCollapseItems(list);
  }, [resumeDetails])
  // const modelList = modelListData.map((model, index) => {
  //   const { icon, title, data } = model;
  //   return {
  //     ...model,
  //     label: <IconAndLabel icon={icon} title={title} />,
  //     children: <ResumeForm data={data}/>,
  //   }
  // });
  // setModelList(modelList);

  return (
    <Card className='flex-grow'>
      <Collapse
        bordered={false}
        items={collapseItems}
        className="bg-white h-full overflow-auto"
      />
      {/* <div className='flex justify-center'>
        <Button shape="round" icon={<PlusOutlined />} className='text-white bg-[#446ef6] hover:!text-white hover:!bg-[#446ef6]' onClick={addModel}>添加模块</Button>
      </div> */}
    </Card>
  )
};

export default React.memo(observer(ResumeBuild));

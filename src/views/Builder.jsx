import { memo, useState, useCallback } from 'react';
import { Button } from 'antd';
import { PlusOutlined, TagsOutlined } from '@ant-design/icons';
import { jsPDF } from 'jspdf';
import { modelListData } from '@/data';
import ModelItem from '@/components/ModelItem';
import Card from '@/components/Card';

const Builder = memo(() => {
  // const doc = new jsPDF();

  // doc.text('Hello world!', 10, 10);
  // doc.save('resume.pdf');

  // 定义一个模型列表
  const [modelList, setModelList] = useState(modelListData);
  // 改变模型列表中某一项的switch
  const checkedChange = useCallback((index, checked) => {
    const nweModelList = [...modelList];
    nweModelList[index].checked = !checked;
    setModelList(nweModelList);
  }, [modelList]);
  // 添加一个模型
  const addModel = () => {
    const model = {
      id: crypto.randomUUID(),
      icon: <TagsOutlined className='flex items-center text-xl text-[#c4c4c4]' />,
      name: '自定义模块',
      checked: true
    };
    setModelList([...modelList, model]);
  };
  
  return (
    <div className='w-full h-full bg-no-repeat bg-cover bg-center'>
      <div className='flex flex-col items-center gap-14 w-full h-full pt-[var(--top-nav-bar-height)]'>
        <div className='flex gap-3 w-[1280px] h-full mx-auto py-4'>
          <Card title='模型选择' className='flex-grow-0 w-[220px] h-full overflow-y-auto'>
            {modelList && modelList.map((item, index) => <ModelItem model={item} key={item.id} checkedChange={() => checkedChange(index, item.checked)} />)}
            <div className='mb-4'></div>
            <div className='flex justify-center'>
              <Button shape="round" icon={<PlusOutlined />} className='text-white bg-[#446ef6] hover:!text-white hover:!bg-[#446ef6]' onClick={addModel}>添加模块</Button>
            </div>
          </Card>
          <Card className='flex-grow'>
            
          </Card>
          <div className='flex-grow'>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  )
});

export default Builder;

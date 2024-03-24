import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'antd';
import { PlusOutlined, FolderAddOutlined } from '@ant-design/icons';

console.log(PlusOutlined);

const ExtraBtns = memo(() => {
  return (
    <div className='flex gap-2'>
      <Button shape="round" icon={<PlusOutlined />} className='text-white font-bold bg-btn-gradient hover:!text-white hover:!bg-btn-gradient'>新建</Button>
      <Button shape="round" icon={<FolderAddOutlined />} className='text-[#446ef6]'>导入</Button>
    </div>
  )
});

const Resume = memo(() => {
  const navigate = useNavigate();
  
  const [resumeList, setResumeList] = useState([
    {
      id: crypto.randomUUID(),
      title: '默认简历'
    }
  ]);

  const builder = (resume) => {
    console.log(resume);
    navigate('/builder');
  };

  return (
    <div className='w-full h-full bg-no-repeat bg-cover bg-center'>
      <div className='flex flex-col items-center gap-14 w-full h-full pt-[var(--top-nav-bar-height)]'>
        <div className='w-[1280px] h-full mx-auto py-4'>
          <Card title="我的简历" extra={<ExtraBtns />} className='w-full'>
            <div className='flex gap-[10px] flex-wrap'>
              {/* <div className='text-xl font-bold'>未登录</div> */}
              {
                resumeList.map(resume => {
                  return (
                    <div key={resume.id} onClick={() => builder(resume)} className='w-[300px] h-[400px] border cursor-pointer'>
                      {resume.title}
                    </div>
                  )
                })
              }
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
});

export default Resume;

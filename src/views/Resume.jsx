import { memo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, message, Divider } from 'antd';
import { PlusOutlined, FolderAddOutlined } from '@ant-design/icons';
import { createResumeApi, getResumeListApi, deleteResumeApi } from '../services';
import dayjs from 'dayjs';

const ExtraBtns = memo(({ toBuilder }) => {
  return (
    <div className='flex gap-2'>
      <Button
        shape="round"
        icon={<PlusOutlined />}
        onClick={() => toBuilder()}
        className='text-white font-bold bg-btn-gradient hover:!text-white hover:!bg-btn-gradient'
      >
        新建
      </Button>
      <Button shape="round" icon={<FolderAddOutlined />} className='text-[#446ef6]'>导入</Button>
    </div>
  )
});

const Resume = memo(() => {
  const navigate = useNavigate();
  
  const [resumeList, setResumeList] = useState([]);

  // 获取简历列表
  const fetchResumeList = async () => {
    try {
      const res = await getResumeListApi();
      if (res.code !== 200) {
        message.error(res.message);
        return;
      }
      setResumeList(res.data);
    } catch (err) {
      message.error(err.message);
    }
  };

  useEffect(() => {
    fetchResumeList();
  }, []);

  // 跳转到编辑简历页面
  const toBuilder = async (id) => {
    let resumeId = id;

    if (!id) {
      try {
        const res = await createResumeApi();
        if (res.code !== 201) {
          message.error(res.message);
          return;
        }
        message.success(res.message);
        resumeId = res.data.id;
      } catch {
        message.error('创建简历失败，请稍后重试');
      }
    }

    resumeId && navigate(`/builder/${resumeId}`);
  };

  // 删除简历
  const deleteResume = async (id) => {
    if (!id) return;
    
    try {
      const res = await deleteResumeApi(id);
      if (res.code !== 200) {
        message.error(res.message);
        return;
      }
      message.success(res.message);
      fetchResumeList();
    } catch (err) {
      message.error(err.message);
    }
  };

  // 简历列表存在
  const resumeListExist = resumeList.map(resume => {
    return (
      <div key={resume.id} className='relative w-[300px] border cursor-pointer group'>
        {<img src={resume.resumeImgUrl} alt="" className='w-full h-[321px] object-contain' />}
        <Divider className="my-0" />
        <div className="p-2">
          <div className="text-lg font-bold">{resume.title}</div>
          <div className="text-sm text-gray-400">上次修改时间：{dayjs(resume.updateAt).format('YYYY-MM-DD HH:mm:ss')}</div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:flex flex-col justify-center items-center gap-4">
          <Button
            type="primary"
            onClick={() => toBuilder(resume.id)}
          >
            编辑
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => deleteResume(resume.id)}
          >
            删除
          </Button>
        </div>
      </div>
    )
  });

  return (
    <div className='w-full h-full bg-no-repeat bg-cover bg-center'>
      <div className='flex flex-col items-center gap-14 w-full h-full pt-[var(--top-nav-bar-height)]'>
        <div className='w-[1280px] h-full mx-auto py-4'>
          <Card title="我的简历" extra={<ExtraBtns toBuilder={toBuilder} />} className='w-full'>
            <div className='flex gap-[10px] flex-wrap'>
              {
                !!resumeList.length ? resumeListExist : (
                  <div className="flex-grow text-lg font-bold text-center">
                    暂无简历
                  </div>
                )
              }
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
});

export default Resume;

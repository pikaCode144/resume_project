import { memo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { Card, Button, message, Divider } from 'antd';
import { getTemplateListApi, templateCreateResumeApi } from '@/services';

const Template = () => {
  const navigate = useNavigate();
  const [templateList, setTemplateList] = useState([]);

  // 获取简历列表
  const fetchTemplateList = async () => {
    try {
      const res = await getTemplateListApi();
      if (res.code !== 200) {
        message.error(res.message);
        return;
      }
      setTemplateList(res.data);
    } catch (err) {
      message.error(err.message);
    }
  };

  useEffect(() => {
    fetchTemplateList();
  }, []);

  // 使用模板创建简历
  const toBuilder = async (resumeId) => {
    try {
      const res = await templateCreateResumeApi(resumeId);
      if (res.code !== 201) {
        throw new Error(res.message);
      }
      const { id } = res.data;
      navigate(`/builder/${id}`);
    } catch (err) {
      message.error(err.message);
    }
  };

  const templateListExist = templateList.map((template) => {
    return (
      <div key={template.id} className='relative w-[300px] border cursor-pointer group'>
        {!!template.resumeImgUrl && <img src={template.resumeImgUrl} alt="" className='w-full object-contain' />}
        <Divider className="my-0" />
        <div className="p-2">
          <div className="text-lg font-bold">{template.title}</div>
          <div className="text-sm text-gray-400">用户：{template.userInfo.email}</div>
          <div className="text-sm text-gray-400">上次修改时间：{dayjs(template.updateAt).format('YYYY-MM-DD HH:mm:ss')}</div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:flex flex-col justify-center items-center gap-4">
          <Button
            type="primary"
            onClick={() => toBuilder(template.id)}
          >
            使用该模板
          </Button>
        </div>
      </div>
    )
  })

  return (
    <div className='w-full h-full bg-no-repeat bg-cover bg-center'>
      <div className='flex flex-col items-center gap-14 w-full h-full pt-[var(--top-nav-bar-height)]'>
        <div className='w-[1280px] h-full mx-auto py-4'>
          <Card title="模板中心" className='w-full'>
            <div className='flex gap-[10px] flex-wrap'>
              {
                !!templateList.length ? templateListExist : (
                  <div className="flex-grow text-lg font-bold text-center">
                    暂无简历模板
                  </div>
                )
              }
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
};

export default memo(Template);

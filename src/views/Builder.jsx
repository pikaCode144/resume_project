import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button, Input, message, Switch } from 'antd';
import { LeftOutlined, EditOutlined, CheckOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import {
  updateResumeTitleApi,
  updateResumePublicApi,
  uploadImageApi,
  updateResumeImgUrlApi,
} from '@/services';
import { useStores } from '@/hooks/useStores';
import ResumeBuild from '@/components/ResumeBuild';
import ResumeView from '@/components/ResumeView';
import ResumeForm from '@/components/ResumeBuild/ResumeForm';
import IconAndLabel from '@/components/basic/IconAndLabel';

// 生成画布的通用函数
const captureCanvas = (element, callback) => {
  html2canvas(element, {
    scale: 2,
    useCORS: true,
    dpi: 300,
  }).then(callback);
};

// 保存PNG的函数
const saveToPNG = (element, filename, resumeId) => {
  captureCanvas(element, (canvas) => {
    canvas.toBlob(async (blob) => {
      // 创建一个File对象
      const file = new File([blob], `${filename}.png`, { type: 'image/png' });
      
      // 下面是如何使用这个File对象
      const formData = new FormData();
      formData.append('picture', file);
      try {
        const res = await uploadImageApi(formData);
        if (res.code !== 200) {
          message.error(res.message);
          return;
        }
        const { pictureUrl } = res;
        updateResumeImgUrlApi(resumeId, pictureUrl);
      } catch (err) {
        message.error(err.message);
      }
    }, 'image/png');
  });
};

// 导出PDF的函数
const exportToPDF = (element, filename) => {
  captureCanvas(element, (canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [793, 1122],
    });
    pdf.addImage(imgData, 'PNG', 0, 0, 793, 1122);
    pdf.save(`${filename}.pdf`);
  });
};

const Builder = () => {
  const [isWrite, setIsWirte] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { resumeInfoStore, viewControlStore } = useStores();

  const { resumeTitle, publicTemplate } = resumeInfoStore;

  // 获取简历详细信息
  const fetchResumeDetails = useCallback(async (id) => {
    try {
      await resumeInfoStore.fetchResumeDetails(id);
    } catch (err) {
      message.error(err.message);
    }
  }, [resumeInfoStore]);

  // 获取简历主题
  const fetchResumeTheme = useCallback(async (id) => {
    try {
      await viewControlStore.fetchResumeTheme(id);
    } catch (err) {
      message.error(err.message);
    }
  }, [viewControlStore]);
  
  // 从后端获取简历的信息
  useEffect(() => {
    fetchResumeDetails(id);
    fetchResumeTheme(id);
  }, [fetchResumeDetails, fetchResumeTheme, id]);

  // 点击返回
  const onBack = () => {
    navigate('/resume');
  };

  // 更改简历标题
  const changeTitle = async () => {
    try {
      const res = await updateResumeTitleApi(id, resumeTitle);
      if (res.code !== 200) {
        throw new Error(res.message);
      }
      message.success(res.message);
    } catch (err) {
      message.error(err.message);
      fetchResumeDetails(id);
    } finally {
      setIsWirte(false);
    }
  };

  // 更改公开状态
  const switchChange = async (checked) => {
    const oldPublicTemplate = resumeInfoStore.publicTemplate;
    resumeInfoStore.setPublicTemplate(checked);
    try {
      const res = await updateResumePublicApi(id, checked);
      if (res.code !== 200) {
        throw new Error(res.message);
      }
      message.success(res.message);
    } catch (err) {
      message.error(err.message);
      resumeInfoStore.setPublicTemplate(oldPublicTemplate);
    }
  };

  // 保存简历详细信息
  const saveResumeDetails = useCallback(async () => {
    try {
      await resumeInfoStore.saveResumeDetails(id);
      const fileName = `${resumeTitle}-${crypto.randomUUID()}`;
      saveToPNG(document.querySelector('#pdf'), fileName, id);
    } catch (err) {
      message.error(err.message);
    }
  }, [resumeInfoStore, id, resumeTitle]);

  const exportPDF = async () => {
    const pdfEl = document.querySelector('#pdf');
    exportToPDF(pdfEl, resumeTitle);
  };

  // 添加一个模型
  // const addModel = () => {
  //   const model = {
  //     id: crypto.randomUUID(),
  //     label: <IconAndLabel />,
  //     isShow: true,
  //     data: [],
  //     children: <ResumeForm data={[]} />,
  //   };
  //   setModelList([...modelList, model]);
  // };
  
  return (
    <div className='absolute z-20 w-[100vw] h-[100vh] bg-layout-gradient bg-no-repeat bg-cover bg-center'>
      {/* <div className='flex flex-col items-center w-full h-full'> */}
        <div className="flex justify-center items-center w-full h-[var(--top-nav-bar-height)] bg-white">
          <div className="flex justify-between items-center w-[1280px] min-w-[600px] h-full px-4">
            <div className="flex items-center gap-4">
              <div
                onClick={onBack}
                className="flex items-center gap-1 text-base cursor-pointer"
              >
                <LeftOutlined />
                <div>我的简历</div>
              </div>
              <div className="flex gap-1 text-lg text-gray-500">
                {
                  isWrite ? (
                    <>
                      <Input
                        value={resumeTitle}
                        onChange={(e) => resumeInfoStore.setResumeTitle(e.target.value)}
                      />
                      <CheckOutlined
                        onClick={changeTitle}
                        className="cursor-pointer"
                      />
                    </>
                  ) : (
                    <>
                      <span>{resumeTitle}</span>
                      <EditOutlined
                        onClick={() => setIsWirte(true)}
                        className="cursor-pointer"
                      />
                    </>
                  )
                }
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-1 text-base text-gray-500">
                公共的简历模板
                <Switch value={publicTemplate} onChange={switchChange} />
              </div>
              <Button
                onClick={saveResumeDetails}
                className="text-white bg-[#446ef6] hover:!text-white hover:!bg-[#446ef6]"
              >
                保存
              </Button>
              <Button
                onClick={exportPDF}
                className="text-white bg-[#446ef6] hover:!text-white hover:!bg-[#446ef6]"
              >
                导出PDF
              </Button>
            </div>
          </div>
        </div>
        <div className='flex gap-3 w-[1280px] h-[calc(100%-var(--top-nav-bar-height))] overflow-hidden mx-auto py-4'>
          <ResumeBuild />
          <ResumeView />
        </div>
      {/* </div> */}
    </div>
  )
};

export default React.memo(observer(Builder));

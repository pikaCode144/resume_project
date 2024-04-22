import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Input, Select, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useStores } from '@/hooks/useStores';
import { currentStatusMap } from '@/constants/options';

const Basic = () => {
  const { id } = useParams();
  const { resumeInfoStore } = useStores();
  const [loading, setLoading] = React.useState(false);

  const {
    name,
    phone,
    email,
    currentStatus,
    jobTilte,
    expectedWorkLocation,
    expectedPay,
    highestEducationLevel,
    personalWebsite,
    facePhotoPath,
  } = resumeInfoStore.personInfo;

  const uploadChange = async ({ file }) => {
    if (file.status !== 'done') {
      setLoading(true);
      return;
    }

    setLoading(false);
    const res = file.response;
    if (res.code !== 200) {
      message.error(res.message);
      return;
    }

    resumeInfoStore.setPersonInfo('facePhotoPath', res.pictureUrl);
  };

  const deleteAvatar = async () => {
    resumeInfoStore.setPersonInfo('facePhotoPath', '');
  };

  const uploadJSX = (
    <Upload
      name="picture"
      accept="image/jpeg,image/png"
      listType="picture-card"
      showUploadList={false}
      action="/api/upload"
      onChange={uploadChange}
    >
      <button
        style={{
          border: 0,
          background: 'none',
        }}
        type="button"
      >
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div
          style={{
            marginTop: 8,
          }}
        >
          Upload
        </div>
      </button>
    </Upload>
  );
  
  return (
    <React.Fragment>
      <div className="flex flex-col gap-2">
        <div>姓名</div>
        <Input
          type="text"
          value={name}
          onChange={(e) => {
            resumeInfoStore.setPersonInfo('name', e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>电话</div>
        <Input
          type="text"
          value={phone}
          onChange={(e) => {
            resumeInfoStore.setPersonInfo('phone', e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>邮箱</div>
        <Input
          type="text"
          value={email}
          onChange={(e) => {
            resumeInfoStore.setPersonInfo('email', e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>当前状态</div>
        <Select
          allowClear
          value={currentStatus}
          options={Object.values(currentStatusMap)}
          onChange={(value) => {
            resumeInfoStore.setPersonInfo('currentStatus', value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>职位名称</div>
        <Input
          type="text"
          value={jobTilte}
          onChange={(e) => {
            resumeInfoStore.setPersonInfo('jobTilte', e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>期望工作地</div>
        <Input
          type="text"
          value={expectedWorkLocation}
          onChange={(e) => {
            resumeInfoStore.setPersonInfo('expectedWorkLocation', e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>期望薪资</div>
        <Input
          type="text"
          value={expectedPay}
          onChange={(e) => {
            resumeInfoStore.setPersonInfo('expectedPay', e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>最高学历</div>
        <Input
          type="text"
          value={highestEducationLevel}
          onChange={(e) => {
            resumeInfoStore.setPersonInfo('highestEducationLevel', e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>个人网站</div>
        <Input
          type="text"
          value={personalWebsite}
          onChange={(e) => {
            resumeInfoStore.setPersonInfo('personalWebsite', e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>头像</div>
        {
          facePhotoPath ? (
            <div className="relative cursor-pointer group">
              <img src={facePhotoPath} alt="avatar" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-50 justify-center items-center hidden group-hover:flex">
                <DeleteOutlined
                  onClick={deleteAvatar}
                  className="text-2xl text-white"
                />
              </div>
            </div>
          ) : uploadJSX
        }
      </div>
    </React.Fragment>
  )
};

export default React.memo(observer(Basic));

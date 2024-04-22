import React from 'react';
import _ from 'lodash';
import { observer } from 'mobx-react';
import { useStores } from '@/hooks/useStores';
import { PhoneFilled, MailFilled, TagFilled, IdcardFilled, EnvironmentFilled, PayCircleFilled, ScheduleFilled, GlobalOutlined } from '@ant-design/icons';
import { currentStatusMap } from '@/constants/options';

const IconAndLabel = observer(({ label, icon, link }) => {
  const { viewControlStore } = useStores();

  return (
    <div className="flex gap-1 mr-1">
      <div style={{ color: viewControlStore.state.color }}>{icon}</div>
      { link ? <a href={link} className="hover:opacity-80" style={{ color: viewControlStore.state.color }}>{link}</a> : <div>{label}</div> }
    </div>
  )
});

const BasicModel = () => {
  const { resumeInfoStore } = useStores();
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
  // const { basic, jobIntention, otherInfo } = data;

  const { id, ...personInfo } = resumeInfoStore.personInfo;
  const allEmpty = _.every(_.values(personInfo), (value) => value === '');
  if (allEmpty) {
    return null;
  }
  
  return (
    <div className="flex">
      <div className="flex-grow">
        <div className="flex flex-wrap">
          {name && (
            <div
              className="w-full mb-2 text-[22px] font-bold"
            >
              {name}
            </div>
          )}
          {phone && (
            <IconAndLabel
              label={phone}
              icon={<PhoneFilled />}
            />
          )}
          {email && (
            <IconAndLabel
              label={email}
              icon={<MailFilled />}
            />
          )}
        </div>
        <div className="flex flex-wrap">
          {currentStatus && (
            <IconAndLabel
              label={currentStatusMap[currentStatus].label}
              icon={<TagFilled />}
            />
          )}
          {jobTilte && (
            <IconAndLabel
              label={jobTilte}
              icon={<IdcardFilled />}
            />
          )}
          {expectedWorkLocation && (
            <IconAndLabel
              label={expectedWorkLocation}
              icon={<EnvironmentFilled />}
            />
          )}
          {expectedPay && (
            <IconAndLabel
              label={expectedPay}
              icon={<PayCircleFilled />}
            />
          )}
        </div>
        <div className="flex flex-wrap">
          {highestEducationLevel && (<IconAndLabel
            label={highestEducationLevel}
            icon={<ScheduleFilled />}
          />)}
          {personalWebsite && (<IconAndLabel
            link={personalWebsite}
            icon={<GlobalOutlined />}
          />)}
        </div>
      </div>
      {facePhotoPath && (
        <img
          src={facePhotoPath}
          className="w-20 h-[100px]"
          alt=""
        />
      )}
    </div>
  );
};

export default React.memo(observer(BasicModel));

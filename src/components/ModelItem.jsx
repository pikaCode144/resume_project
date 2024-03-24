import { memo } from "react";
import { Switch, Divider } from 'antd';

const ModelItem = memo(({ model, checkedChange }) => {
  
  return (
    <>
      <div className="flex items-center p-4">
        <span>{model.icon}</span>
        <span className="flex-grow truncate mx-2">{model.name}</span>
        <Switch checked={model.checked} onChange={checkedChange} size="small" className={!model.checked && ' !bg-[#00000080]'} />
      </div>
      <Divider className="my-0" />
    </>
  )
});

export default ModelItem;

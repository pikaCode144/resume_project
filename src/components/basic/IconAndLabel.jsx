import { memo } from 'react';
import DynamicIcon from './DynamicIcon';

const IconAndLabel = memo(({ icon = 'tagsOutlined', title = '自定义模块' }) => {
  return (
    <div className='flex gap-2'>
      <DynamicIcon icon={icon} className='flex items-center text-xl text-[#c4c4c4]' />
      <span>{title}</span>
    </div>
  )
});

export default IconAndLabel;

import { memo } from 'react';
import { Spin } from 'antd';

const ScreenLoading = memo(() => (
  <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999] bg-white bg-opacity-30'>
    <Spin size='large' />
  </div>
))

export default ScreenLoading;

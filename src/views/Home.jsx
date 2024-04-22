import { memo } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import homeBg from '../assets/home-bg.jpg';

const Home = memo(() => {
  const navigate = useNavigate();
  
  return (
    <div className='w-full h-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${homeBg})`}}>
      <div className='flex flex-col items-center gap-14 w-full h-full pt-[var(--top-nav-bar-height)]'>
        <div className='mt-[128px] text-[62px] text-[#446ef6]'>写简历从未如此简单</div>
        <div className='text-[30px] font-semibold text-[#636363]'>快速生成精美的个人简历</div>
        <div>
          <Button
            shape="round"
            size='large'
            onClick={() => navigate('/resume')}
            className='h-auto !px-8 py-3 text-2xl text-white bg-[#446ef6] hover:!text-white hover:!bg-[#446ef6]'
          >
            免费制作简历
          </Button>
        </div>
      </div>
    </div>
  )
});

export default Home;

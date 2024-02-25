import { memo } from 'react';

import homeBg from '../assets/home-bg.jpg';

const Home = memo(() => {
  return (
    <div className='w-full h-full'>
      <div className="absolute top-0 left-0 -z-0 w-full h-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${homeBg})`}}>
      </div>

    </div>
  )
});

export default Home;

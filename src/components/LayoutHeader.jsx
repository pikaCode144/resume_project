import { useState, memo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button, Menu } from 'antd';
import { useStores } from '@/hooks/useStores';

const items = [
  {
    label: '首页',
    key: '/home'
  },
  {
    label: '模板中心',
    key: '/template'
  },
  {
    label: '我的简历',
    key: '/resume'
  }
]

const LayoutHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userStore } = useStores();
  const { userInfo } = userStore;
  
  // 当前所处的菜单
  const [curMenu, setCurMenu] = useState(pathname);

  useEffect(() => {
    setCurMenu(pathname);
  }, [pathname]);
  
  // 切换路由，并设置菜单的激活项
  const changeRoute = (key) => {
    navigate(key);
    setCurMenu(key);
  };
  
  return (
    <div className='flex items-center w-[1280px] min-w-[600px] px-4'>
      <div className="flex justify-start w-[192px]">
        <div onClick={() => changeRoute('/home')} className='flex items-center gap-3 cursor-pointer'>
          <img src="/assets/resume-logo.png" alt="" className="w-[40px] h-[40px]" />
          <h1 className='text-lg'>在线简历</h1>
        </div>
      </div>
      <div className="flex-grow">
        <Menu
          onClick={(e) => changeRoute(e.key)}
          selectedKeys={[curMenu]}
          mode="horizontal"
          items={items}
        />
      </div>
      <div>
        {
          userInfo ? (
            <div className="flex items-center gap-2">
              <div>{userInfo.email}</div>
              <Button
                onClick={() => userStore.logout()}
                shape="round" size="middle"
                className="text-white bg-[#446ef6] hover:!text-white hover:!bg-[#446ef6]"
              >
                登出
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => changeRoute('/login')}
              shape="round" size="middle"
              className='text-white bg-[#446ef6] hover:!text-white hover:!bg-[#446ef6]'
            >
              登录
            </Button>
          )
        }
      </div>
    </div>
  )
};

export default memo(observer(LayoutHeader));

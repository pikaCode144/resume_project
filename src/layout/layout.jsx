import { memo } from 'react';
import { Layout } from 'antd';

import LayoutHeader from '../components/LayoutHeader';

const { Header, Content } = Layout;

const layout = memo(({ children }) => {
  return (
    <Layout className="min-w-[1280px]">
      <Header className='fixed top-0 left-0 right-0 z-10 flex justify-center h-[var(--top-nav-bar-height)] px-0 bg-white'>
        <LayoutHeader />
      </Header>
      <Content className='h-[100vh] overflow-y-auto bg-layout-gradient'>
        {children}
      </Content>
    </Layout>
  )
});

export default layout;

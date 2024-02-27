import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import LoginBg from '../assets/login-bg.jpg';

const formRules = {
  email: [
    { required: true, message: '请输入您的邮箱!' },
    { type: 'email', message: '请输入正确的邮箱格式!' }
  ],
  password: [
    { required: true, message: '请输入您的密码!' }
  ]
}

const Login = memo(() => {
  const navigete = useNavigate();
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const toRegister = () => {
    navigete('/register');
  };

  return (
    <div className='w-full h-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${LoginBg})`}}>
      <div className='relative w-full h-full pt-[var(--top-nav-bar-height)]'>
        <div className='absolute top-1/2 right-[240px] -translate-y-1/2 flex flex-col gap-6'>
          <div className='text-[33px] text-[#446ef6] font-semibold text-center'>登录即可创建简历</div>
          <div className='w-[386px] h-[408px] p-8 bg-white rounded-2xl'>
            <div className="flex justify-center pb-6">
              <div className='flex items-center gap-3 cursor-pointer'>
                <img src="/assets/resume-logo.png" alt="" className="w-[56px] h-[56px]" />
                <h1 className='text-lg'>登录账号</h1>
              </div>
            </div>
            <Form name="loginForm" labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}
              initialValues={{ remember: true }} onFinish={onFinish}
              autoComplete="off" className='max-w-[300px] m-auto'>
              <Form.Item label="邮箱" name="email" rules={formRules.email}>
                <Input size='large' placeholder="请输入您的邮箱..." />
              </Form.Item>
              <Form.Item label="密码" name="password" rules={formRules.password}>
                <Input.Password size='large' placeholder="请输入您的密码..." />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button type="primary" size='large' onClick={toRegister} className='w-full mb-2 text-white bg-[#446ef6] hover:!text-white hover:!bg-[#446ef6]'>
                  注册
                </Button>
                <Button type="primary" htmlType="submit" size='large' className='w-full text-white bg-[#446ef6] hover:!text-white hover:!bg-[#446ef6]'>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
});

export default Login;

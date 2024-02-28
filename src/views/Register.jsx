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
    { required: true, message: '请输入您的密码!' },
    { min: 6, message: '密码长度不能小于6位!' },
    { max: 18, message: '密码长度不能超过18位!' },
    // 确保密码中包含数字和字母
    { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/, message: '密码必须包含数字和字母，且不能包含汉字!' },
    // 确保密码不包含汉字
    { pattern: /^[^\u4e00-\u9fa5]+$/, message: '密码不能包含汉字!' }
  ]
}

const confirmHandle = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue('password') === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('两次输入的密码不一致!'));
  },
})

const Register = memo(() => {
  const navigete = useNavigate();
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const toLogin = () => {
    navigete('/login');
  };

  return (
    <div className='w-full h-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${LoginBg})`}}>
      <div className='relative w-full h-full pt-[var(--top-nav-bar-height)]'>
        <div className='absolute top-1/2 right-[240px] -translate-y-1/2 flex flex-col gap-6'>
          <div className='text-[33px] text-[#446ef6] font-semibold text-center'>免费注册账号</div>
          <div className='w-[386px] p-8 bg-white rounded-2xl'>
            <div className="flex justify-center pb-6">
              <div className='flex items-center gap-3 cursor-pointer'>
                <img src="/assets/resume-logo.png" alt="" className="w-[56px] h-[56px]" />
                <h1 className='text-lg'>注册账号</h1>
              </div>
            </div>
            <Form name="registerForm"
              initialValues={{ remember: true }} onFinish={onFinish}
              autoComplete="off" className='max-w-[300px] m-auto'>
              <Form.Item name="email" rules={formRules.email}>
                <Input size='large' placeholder="请输入您的邮箱..." />
              </Form.Item>

              <Form.Item name="password" rules={formRules.password}>
                <Input.Password size='large' placeholder="请输入您的密码..." />
              </Form.Item>

              <Form.Item name="confirm" dependencies={['password']} rules={[ ...formRules.password, confirmHandle ]}>
                <Input.Password size='large' placeholder="请再次输入您的密码..." />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button htmlType="submit" type="primary" size='large' className='w-full mb-2 text-white bg-[#446ef6] hover:!text-white hover:!bg-[#446ef6]'>
                  注册
                </Button>
                <Button size='large' className='w-full' onClick={toLogin}>
                  返回
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
});

export default Register;

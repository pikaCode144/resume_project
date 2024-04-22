import { memo, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { getCodeApi, userRegister } from '../services';

import LoginBg from '../assets/login-bg.jpg';

const formRules = {
  email: [
    { required: true, message: '请输入您的邮箱!' },
    { type: 'email', message: '请输入正确的邮箱格式!' },
  ],
  password: [
    { required: true, message: '请输入您的密码!' },
    { min: 6, message: '密码长度不能小于6位!' },
    { max: 18, message: '密码长度不能超过18位!' },
    // 确保密码中包含数字和字母
    { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/, message: '密码必须包含数字和字母，且不能包含汉字!' },
    // 确保密码不包含汉字
    { pattern: /^[^\u4e00-\u9fa5]+$/, message: '密码不能包含汉字!' },
  ],
  code: [
    { required: true, message: '验证码必须填写' },
    { pattern: /^[\d]{6}$/, message: '验证码只能是6位数字' },
  ],
}

const confirmHandle = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue('password') === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('两次输入的密码不一致!'));
  },
})

const initForm = {
  email: '',
  password: '',
  confirm: '',
  code: '',
};

const Register = memo(() => {
  const navigete = useNavigate();
  const formRef = useRef(null);
  const [counting, setCounting] = useState(false);
  const [count, setCount] = useState(60);
  const codeRef = useRef(0);

  useEffect(() => {
    let interval = null;
    if (counting && count !== 0) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else if (count === 0) {
      codeRef.current = 0;
      setCounting(false);
      setCount(60);
    }
    return () => clearInterval(interval);
  }, [counting, count]);

  // 从后端获取验证码
  const getCode = async () => {
    if (!formRef.current) {
      return;
    }

    setCounting(true);
    const values = formRef.current.getFieldsValue();
    const { email } = values;

    if (!email) {
      message.warning('发送验证码前，请填写邮箱~');
      return;
    }

    try {
      const res = await getCodeApi(email);
      if (res.code !== 200) {
        message.error(res.message);
        return;
      }
      message.success(res.message);
      codeRef.current = res.data.code;
    } catch {
      message.error('获取验证码失败~');
    }
  };

  // 进行提交逻辑
  const onSubmit = async () => {
    if (!formRef.current) {
      return;
    }

    try {
      await formRef.current.validateFields();
    } catch {
      message.warning('请正确填写数据~');
      return;
    }

    const values = formRef.current.getFieldsValue();
    const { code } = values;

    if (code !== codeRef.current) {
      message.warning("请输入正确的验证码~");
      return;
    }

    try {
      const res = await userRegister(values);
      if (res.code !== 201) {
        message.error(res.message);
        return;
      }
      message.success(res.message);
      navigete('/login');
    } catch {
      message.error('注册失败，请稍后重试');
    }
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
            <Form ref={formRef} initialValues={initForm} autoComplete="off" className='max-w-[300px] m-auto'>
              <Form.Item name="email" rules={formRules.email}>
                <Input size='large' placeholder="请输入您的邮箱..." />
              </Form.Item>

              <Form.Item name="password" rules={formRules.password}>
                <Input.Password size='large' placeholder="请输入您的密码..." />
              </Form.Item>

              <Form.Item name="confirm" dependencies={['password']} rules={[ ...formRules.password, confirmHandle ]}>
                <Input.Password size='large' placeholder="请再次输入您的密码..." />
              </Form.Item>

              <div className="flex gap-2">
                <Form.Item name="code" rules={formRules.code} className="flex-grow">
                  <Input />
                </Form.Item>
                <Button
                  disabled={counting}
                  onClick={getCode}
                >
                  {counting ? `${count} 秒后重新获取` : '获取验证码'}
                </Button>
              </div>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button onClick={onSubmit} type="primary" size='large' className='w-full mb-2 text-white bg-[#446ef6] hover:!text-white hover:!bg-[#446ef6]'>
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

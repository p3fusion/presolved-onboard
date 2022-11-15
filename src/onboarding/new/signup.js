import React, { useState, useEffect } from 'react';
import '../styles/signup.css'
import '../assets/style/index.less';
import 'antd/dist/antd.less';
import 'antd/lib/style/themes/default.less';
import logo from '../assets/images/new-big-logo-1.png';
import vector from '../assets/images/vector-login-1-1.png'
import { Form, Input, Button, Typography } from 'antd';

const SignupPage = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div className='container'>
      <div className='imageLayoutBig'>
        <div className='logoLayout'>
          <img src={logo} alt="Presolved logo" className='logo' />
        </div>
        <div className='vectorLayout'>
          <img src={vector} alt="Signup vector image" className='vector' />
        </div>
      </div>
      <div className='imageLayoutSmall'>
          <img src={logo} alt="Presolved logo" className='logo' />
        </div>
      <div className='formLayout'>
        <Typography className='title'>Signup to Presolved</Typography>
        <Typography className='smallText'>Enter all mandatory fields</Typography> 
        
        <Form
          layout='vertical'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          name='signupForm'
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 32,
          }}
          style={{
            marginTop:'30px'
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Please enter your full name"
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderColor: '#0E65D7',
                lineHeight:1
              }} />
          </Form.Item>
          <Form.Item
            label="E-mail Address"
            name='email'
            rules={[
              {
                required: true,
                message: 'Please input your email address!',
              },
            ]}
          >
            <Input
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderColor: '#0E65D7',
                lineHeight:1
              }} />
          </Form.Item>
          <Form.Item
            label="Company name"
            name='compName'
            rules={[
              {
                required: true,
                message: 'Please input your company name!',
              },
            ]}
          >
            <Input
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderColor: '#0E65D7',
                lineHeight:1
              }} />
          </Form.Item>
          <Form.Item
            label="Phone number"
            name='phoneNumber'
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderColor: '#0E65D7',
                lineHeight:1
              }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{width: '100%'}}>
              Create Account
            </Button>
          </Form.Item>
        </Form>
        <Typography className='smallText'>By clicking Create Account, you agree to our Terms & Conditions</Typography>
      </div>
    </div>
  )
}

export default SignupPage
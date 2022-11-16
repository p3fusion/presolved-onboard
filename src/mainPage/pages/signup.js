import React from 'react'
import { HomeOutlined, LaptopOutlined, NotificationOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, Row, Typography, Col, Divider, Card, Form, Input } from 'antd';
import logo from '../assets/images/logo-white.png';
import { Link, Router } from '@gatsbyjs/reach-router';
import 'antd/dist/antd.less';
import '../assets/style/signup.less';
import ils4 from '../assets/images/illustrations/signup-4.svg'
import ils5 from '../assets/images/illustrations/signup-3.svg'

const { Header, Content, Footer } = Layout;

const PresolvedSignupPage = () => {
  const onFinish = (e) => {

  }
  const onFinishFailed = (e) => {

  }
  return (
    <Layout className='signup-page'>
      <main className='container' style={{background:`url(${ils5})`, backgroundRepeat:'no-repeat', backgroundPosition:'right',backgroundSize:'24% 54%' }}>

        <section className='sidebar'>
          <div className='sidebar-container'>
            <div className='logo-container'>
              <img src={logo} height={150} />
            </div>
            <div className='footer'>
              <img src={ils4} />
            </div>
          </div>
        </section>

        <section className='main'>
          <div className='main-container'>
            <Typography.Title level={1}>Signup to presolved</Typography.Title>
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
                marginTop: '30px'
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
                    lineHeight: 1
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
                    lineHeight: 1
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
                    lineHeight: 1
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
                    lineHeight: 1
                  }} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" size='large' htmlType="submit" style={{ width: '100%' }}>
                  Create Account
                </Button>
              </Form.Item>
            </Form>
            <div className='agreement'>
              <p>By clicking Create Account, you agree to our Terms & Conditions</p>
            </div>
          </div>
        </section>

      </main>

    </Layout>
  )
}

export default PresolvedSignupPage
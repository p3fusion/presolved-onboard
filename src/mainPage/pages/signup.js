import React, { useEffect, useState } from 'react'
import { HomeOutlined, LaptopOutlined, NotificationOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, Row, Typography, Col, Divider, Card, Form, Input, notification, Alert, Select } from 'antd';
import logo from '../assets/images/logo-white.png';
import { Link, Router } from '@gatsbyjs/reach-router';
import 'antd/dist/antd.less';
import '../assets/style/signup.less';
import ils4 from '../assets/images/illustrations/signup-4.svg'
import ils5 from '../assets/images/illustrations/signup-3.svg'
import * as mutations from '../../graphql/mutations'
import { listTenants, getTenant } from '../../graphql/queries'
import { API } from 'aws-amplify';
const { Header, Content, Footer } = Layout;
import { payload } from '../payload';

const PresolvedSignupPage = () => {


  const [state, setState] = useState({

    isSignedUp: false,
    isSignupError: false,
    errorMessage: null


  })

  const regions = payload.regions

  useEffect(() => { }, [])


  const onFinish = (e) => {


    const newTenant = {
      adminname: e.name,
      description: "new user signup from onboard page",
      email: e.email,
      mobile: e.mobile,
      company: e.company,
      region: e.region
    }
    createTenant(newTenant)

  }
  const onFinishFailed = (e) => {

  }


  const createTenant = async (newTenant) => {
    try {
      let checkIfExist = await validateTenant(newTenant.email)
      if (checkIfExist.listTenants && checkIfExist.listTenants.items && checkIfExist.listTenants.items.length) {
        setState({ ...state, isSignupError: true, errorMessage: "You have already signed up using the email" })
        notification.error({
          message: "Already Registered",
          description: " Seems you have already registered with us please check you mail box"
        })
      } else {
        await API.graphql({ query: mutations.createTenant, variables: { input: newTenant } })
        setState({ ...state, isSignupError: false, errorMessage: null, isSignedUp: true })
        notification.success({
          message: "Signup completed",
          description: " Please check your mail for the further instructions"
        })

      }

    } catch (error) {
      console.error({ createTenant: error.message })
      throw error
    }

  }

  const validateTenant = async (email) => {
    try {
      let filter = { email: { eq: email } }
      let result = await API.graphql({ query: listTenants, variables: { filter: filter } });
      console.log({ validateTenant: result.data });
      return result.data
    } catch (error) {
      console.error({ validateTenant: error })
      throw error
    }

  }

  return (
    <Layout className='signup-page'>
      <main className='container' style={{ background: `url(${ils5})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundSize: '24% 54%' }}>

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

            {!state.isSignedUp ?

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
                <Typography.Title level={1}>Signup to presolved</Typography.Title>
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
                  name='company'
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
                  name='mobile'
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
                <Form.Item
                  label="Choose Region"
                  name='region'
                  rules={[{ required: true, message: 'Please choose the preferred region!' }]}
                >
                  <Select
                    options={regions}
                    allowClear
                    showAction={true}
                    style={{
                      outlineColor: '#0E65D7',
                    }}
                  >
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" size='large' htmlType="submit" style={{ width: '100%' }}>
                    Create Account
                  </Button>

                  {state.isSignupError &&
                    <div style={{ margin: '30px 0' }}>

                      <Alert
                        message="Already Registered!"
                        description={state.errorMessage}
                        type="error"
                        showIcon
                        closable
                      />
                    </div>
                  }

                </Form.Item>
                <div className='agreement'>
                  <p>By clicking Create Account, you agree to our Terms & Conditions</p>
                </div>
              </Form>
              :
              <div style={{ margin: '40px 0' }}>
                <Typography.Title level={3}>
                  Thank you for signingup
                </Typography.Title>
                <p>Please check you mail box to procees further</p>
              </div>
            }

          </div>
        </section>

      </main>

    </Layout>
  )

}

export default PresolvedSignupPage



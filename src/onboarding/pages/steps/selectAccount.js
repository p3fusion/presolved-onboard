
import { Button, Card, Col, Divider, Form, Input, Radio, Row, Space, Typography, Switch, Select } from 'antd';
import { QuestionOutlined, SelectOutlined, PhoneOutlined, AmazonOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import ils1 from '../../assets/images/illustrations/signup-2.svg'
import presolvedLogo from '../../assets/images/presolved-small-logo.png'
import region from '../../assets/images/region.png'
import { payload } from '../payload';
import { useDispatch } from 'react-redux';
import { updateStep1 } from '../../store/reducers/steps';
import { useSelector } from 'react-redux';

const SelectAccount = (props) => {

    const dispatch = useDispatch()
    const { next, state, setState } = props

    const prevStep = useSelector((state) => state.steps.step1);
    
    const onFinish = (values) => {
        dispatch(updateStep1( values.account ))
        next();
    };

    const regions = payload.regions

    return (
        <div style={{ padding: '15px', }} >
            <Row gutter={[16, 16]} align='stretch' justify='space-evenly'>
                <Col span={8} className="imgsidebar">
                    <img src={ils1} className="sideimg" />
                </Col>
                <Col span={16}>
                    <Typography.Title level={3}>Please choose the Account type</Typography.Title>
                    <Divider />
                    {/* Choosing account type Buttons  */}
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <div className='account-type'>
                                <Card className={`items ${state.accountType == 0 && "selected"} `} extra={[<QuestionOutlined />]}
                                    onClick={() => { 
                                        setState({ ...state, accountType: 0 });
                                        if(prevStep.length!=0)
                                            dispatch(updateStep1( [] ))
                                    }}
                                >
                                    <Row align='middle' gutter={[16, 16]}  >
                                        <Col span={4}>
                                            <AmazonOutlined style={{ fontSize: 50 }} />
                                        </Col>
                                        <Col span={20}>
                                            <Typography.Title level={3}>Self Managed AWS account</Typography.Title>

                                        </Col>
                                    </Row>
                                </Card>

                                <Card className={`items ${state.accountType == 1 && "selected"} `} extra={[<QuestionOutlined />]}
                                    onClick={() => { 
                                        setState({ ...state, accountType: 1 });
                                        if(prevStep.length!=0)
                                        dispatch(updateStep1([] ))
                                     }}
                                >
                                    <Row align='middle' gutter={[16, 16]}  >
                                        <Col span={4}>
                                            <img src={presolvedLogo} height={50} />
                                        </Col>
                                        <Col span={20}>
                                            <Typography.Title level={3}>Presolved Managed AWS account</Typography.Title>
                                        </Col>
                                    </Row>
                                </Card>
                            </div>
                        </Col>
                    </Row>


                    <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
                        <Col span={24}>
                            {/* Forms based on user input */}

                            {state.accountType == 0 &&
                                <Form size='large' name="step1" layout='vertical' labelCol={{ span: 8 }} wrapperCol={{ span: 14 }} onFinish={onFinish} autoComplete="off" >
                                    <Form.Item style={{ display: 'none' }} name={['account', 'type']} initialValue={state.accountType == 0 ? 'selfManagedAccount' : 'presolvedAccount'} >
                                        <Input type='hidden' />
                                    </Form.Item>
                                    <Card style={{}}>
                                        <Form.Item
                                            label="Account ID"
                                            name={['account', 'selfManagedAccount', 'ID']}
                                            rules={[{ required: true, message: 'Please input your account id!' }]}
                                            initialValue={prevStep.length!=0 ? prevStep.selfManagedAccount.ID:""}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            label="Tenant Name"
                                            name={['account', 'selfManagedAccount', 'tenant']}
                                            rules={[{ required: true, message: 'Please input your Tenant Name!' }]}
                                            initialValue={prevStep.length!=0 ? prevStep.selfManagedAccount.tenant:""}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <section className='region-map' style={{ background: `url("${region}") right  no-repeat`, backgroundSize: 'contain' }}>

                                            <Form.Item
                                                label="Choose Region"
                                                name={['account', 'selfManagedAccount', 'region']}
                                                rules={[{ required: true, message: 'Please choose the preferred region!' }]}
                                                initialValue={prevStep.length!=0 ? prevStep.selfManagedAccount.region:""}
                                            >
                                                <Select options={regions} allowClear showAction={true}>

                                                </Select>
                                            </Form.Item>
                                        </section>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit">
                                                Next
                                            </Button>
                                        </Form.Item>
                                    </Card>
                                </Form>
                            }
                            {
                                state.accountType == 1 &&
                                <Form size='large' layout='vertical' labelCol={{ span: 8 }} wrapperCol={{ span: 14 }} onFinish={onFinish} autoComplete="off" >
                                    <Form.Item style={{ display: 'none' }} name={['account', 'type']} initialValue={state.accountType == 0 ? 'selfManagedAccount' : 'presolvedAccount'} >
                                        <Input type='hidden' />
                                    </Form.Item>
                                    <Card style={{}}>
                                        <Form.Item
                                            label="Tenant Name"
                                            name={['account', 'presolvedAccount', 'tenant']}
                                            rules={[{ required: true, message: 'Please input your Tenant Name!' }]}
                                            initialValue={prevStep.length!=0 ? prevStep.presolvedAccount.tenant:""}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item 
                                        label="Account Name" 
                                        name={['account', 'presolvedAccount', 'accountName']} 
                                        rules={[{ required: true, message: 'Please input your Account Name!' }]}
                                        initialValue={prevStep.length!=0 ? prevStep.presolvedAccount.accountName:""}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item 
                                        label="Email Id"
                                     name={['account', 'presolvedAccount', 'emailID']} 
                                     rules={[{ required: true, message: 'Please input your email id!' }]} 
                                     initialValue={prevStep.length!=0 ? prevStep.presolvedAccount.emailID:""}
                                     >
                                            <Input />
                                        </Form.Item>
                                        <section className='region-map' style={{ background: `url("${region}") right  no-repeat`, backgroundSize: 'contain' }}>

                                            <Form.Item
                                                label="Choose Region"
                                                name={['account', 'presolvedAccount', 'region']}
                                                rules={[{ required: true, message: 'Please choose the preferred region!' }]}
                                                initialValue={prevStep.length!=0 ? prevStep.presolvedAccount.region:""}
                                            >
                                                <Select options={regions} allowClear showAction={true}>

                                                </Select>
                                            </Form.Item>
                                        </section>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit">
                                                Next
                                            </Button>
                                        </Form.Item>
                                    </Card>
                                </Form>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    );

}

export default SelectAccount;
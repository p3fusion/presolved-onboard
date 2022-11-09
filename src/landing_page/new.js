import React from 'react';
import { Button, Form, Input, Row, Col,Typography } from 'antd';
import { navigate } from '@gatsbyjs/reach-router';

const NewPage = () => {

    const onFinish = (values) => {
        console.clear();
        console.log('Success:', values);
        navigate("/signup")
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <section>
            <Typography.Title level={2} style={{padding: "30px 20px" }}>Sign Up</Typography.Title>
            <Row type="flex" justify="center" align="middle" >

                <Col span={18} >
                    <Form name="new"
                        size='large'
                        layout='horizontal'
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Company Name"
                            name="compName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Company name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    required: true,
                                    message: 'Please input email',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 14,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Create Account
                            </Button>
                        </Form.Item>
                    </Form>

                </Col>


            </Row>
        </section>


    );
}

export default NewPage;




import { Button, Card, Col, Divider, Form, Input, List, Radio, Result, Row, Select, Space, Steps, Switch, Typography, Tabs } from 'antd';
import React, { useState } from 'react';
import { PlusOutlined, MailOutlined, MessageOutlined, PhoneOutlined, ApartmentOutlined, WechatOutlined, UnorderedListOutlined } from '@ant-design/icons';
import ils1 from '../../assets/images/illustrations/signup-4.svg';
import { useDispatch } from 'react-redux';
import { updateStep2 } from '../../store/reducers/steps';
import FormItem from 'antd/es/form/FormItem';

const { Step } = Steps;

const ChooseChannel = (props) => {

    const dispatch = useDispatch()
    const { next, state, setState, prev } = props
    const [tab, activeTab] = useState("phone")
    const [chatVal, setChatVal] = useState([]);

    const chatValues = (values) => {
        setChatVal(values)
    }

    const onFinish = (values) => {
        let data = {
            ...values,
            EnablePhoneChannel: state.channel.isPhoneSelected,
            EnableChatChannel: state.channel.isChatSelected,
            EnableEmailChannel: state.channel.isEmailSelected,
            intents: chatVal[0],
            utterances: chatVal[1],

        }
        dispatch(updateStep2({ data }))
        //setState({...state,step2: values })
        next();
    }

    const onFinishFailed = (e) => {
        console.log({ failures: e });
        if (e.errorFields.length > 0) {
            let getErrorTab = e.errorFields[0].name[1];
            activeTab(getErrorTab)

        }
    }

    return (
        <div className='steps-channel'>
            <Row gutter={[16, 16]} align='top' justify='space-evenly'>

                <Col span={8} className="imgsidebar"> <img src={ils1} className="sideimg" /></Col>

                <Col span={16}>
                    <Typography.Title level={3}>Choose Your required Channels</Typography.Title>
                    <Divider />
                    <Row>
                        <Col span={24}>
                            <div className='channels'>
                                <Card className='channel-item'>
                                    <Row align='middle'>
                                        <Col span={12}>
                                            <PhoneOutlined style={{ fontSize: 50 }} />
                                        </Col>
                                        <Col span={12}>
                                            <Typography.Title level={3}>Phone</Typography.Title>
                                            <Switch
                                                onChange={() => setState({
                                                    ...state,
                                                    channel: {
                                                        ...state.channel,
                                                        isPhoneSelected: !state.channel.isPhoneSelected
                                                    }
                                                })}
                                                defaultChecked={state.channel.isPhoneSelected}
                                            />
                                        </Col>
                                    </Row>
                                </Card>
                                <Card className='channel-item'>
                                    <Row align='middle'>
                                        <Col span={12}>
                                            <MailOutlined style={{ fontSize: 50 }} />
                                        </Col>
                                        <Col span={12}>
                                            <Typography.Title level={3}>Email</Typography.Title>
                                            <Switch
                                                onChange={() => setState({
                                                    ...state,
                                                    channel: {
                                                        ...state.channel,
                                                        isEmailSelected: !state.channel.isEmailSelected
                                                    }
                                                })}
                                                defaultChecked={state.channel.isEmailSelected}
                                            />
                                        </Col>
                                    </Row>
                                </Card>
                                <Card className='channel-item'>
                                    <Row align='middle'>
                                        <Col span={12}>
                                            <MessageOutlined style={{ fontSize: 50 }} />
                                        </Col>
                                        <Col span={12}>
                                            <Typography.Title level={3}>Chat</Typography.Title>
                                            <Switch
                                                onChange={() => setState({
                                                    ...state,
                                                    channel: {
                                                        ...state.channel,
                                                        isChatSelected: !state.channel.isChatSelected
                                                    }
                                                })}
                                                defaultChecked={state.channel.isChatSelected}
                                            />
                                        </Col>
                                    </Row>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 30 }}>
                        <Col span={22}>
                            <Form name="form2" layout='vertical' size='large' onFinish={onFinish} onFinishFailed={onFinishFailed}
                                initialValues={{
                                    channel: {
                                        number: state.channel.phone.numberType
                                    }
                                }}
                            >
                                <Tabs activeKey={tab ? tab : null} onChange={(e) => activeTab(e)}>
                                    {state.channel.isPhoneSelected &&
                                        <Tabs.TabPane tab="Phone" key="phone"  >
                                            <RenderPhone {...props} />
                                        </Tabs.TabPane>
                                    }
                                    {state.channel.isEmailSelected &&
                                        <Tabs.TabPane tab="Email" key="email"  >
                                            <RenderEmail {...props} />
                                        </Tabs.TabPane>

                                    }
                                    {state.channel.isChatSelected &&
                                        <Tabs.TabPane tab="Chat" key="chat"  >
                                            <RenderChat {...props} chatValues={chatValues} />
                                        </Tabs.TabPane>

                                    }
                                    {
                                        !state.channel.isPhoneSelected &&
                                        !state.channel.isEmailSelected &&
                                        !state.channel.isChatSelected &&
                                        <Tabs.TabPane tab="Chat" key="chat"  >
                                            <Result title="Choose atleast 1 services to proceed further" status="500" />
                                        </Tabs.TabPane>


                                    }
                                </Tabs>

                                <Card>
                                    <Space>
                                        <Button type="ghost" size='large' onClick={() => prev()} >Previous</Button>
                                        <Button type="primary" htmlType="submit" size='large'>Next</Button>
                                    </Space>
                                </Card>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};


const RenderChat = (props) => {

    const { next, state, setState, prev } = props

    const [st, setst] = useState({
        intentSelected: "greetings",
        intent: null,
        intents: [
            { "label": "Greetings", "value": "greetings" },
            { "label": "Welcome", "value": "welcome" },
            { "label": "Inquiry", "value": "inquiry" },
            { "label": "Operator", "value": "operator" },
            { "label": "Renewal", "value": "renewal" },
        ],
        utterance: null,
        utterances: [
            { "intents": "greetings", "value": "Hello there" },
            { "intents": "greetings", "value": "How are you" },
            { "intents": "greetings", "value": "How may i help" },
            { "intents": "welcome", "value": "Welcome" },
            { "intents": "welcome", "value": "Good day" },
            { "intents": "welcome", "value": "Its good to see you" },
            { "intents": "renewal", "value": "When is next due date" },
            { "intents": "renewal", "value": "want to renew" },
            { "intents": "renewal", "value": "remind me for next" },
        ]
    })

    return (
        <Row>
            <Col span={24}>
                <Card title="Intents / Category">

                    <Row gutter={[16, 16]}>
                        <Col span={10}>
                            <p>Add Intents</p>
                            <Space>
                                <Input value={st.intent} placeholder='Add Intents' onChange={(e) => setst({
                                    ...st,
                                    intent: e.target.value,
                                })} />

                                <Button type='primary' icon={< PlusOutlined />} onClick={() => {
                                    let { intents } = st;
                                    intents.push({ "label": st.intent, "value": st.intent })
                                    setst({ ...st, intents, intentSelected: st.intent, intent: null })
                                }} />
                            </Space>
                            <Divider > Available intents </Divider>
                            <List
                                itemLayout='horizontal'
                                bordered
                                dataSource={st.intents}
                                renderItem={item => (
                                    <List.Item onClick={() => { setst({ ...st, intentSelected: item.value }), props.chatValues([st.intents, st.utterances]) }}
                                        style={{
                                            cursor: 'pointer',
                                            background: st.intentSelected === item.value ? '#aaa5fa' : '#fff'

                                        }}>
                                        <Typography.Text><UnorderedListOutlined /> {item.label}</Typography.Text>
                                    </List.Item>
                                )}
                            />
                        </Col>

                        <Col span={14}>
                            <p>Utterncases for <em>{st.intentSelected}</em></p>
                            <Space>
                                <Input placeholder={`Add Utterances for ${st.intentSelected}`}
                                    onChange={(e) => setst({
                                        ...st,
                                        utterance: e.target.value,
                                    })}
                                />
                                <Button type='primary' icon={< PlusOutlined />} onClick={() => {
                                    let { utterances } = st;
                                    utterances.push({ "intents": st.intentSelected, "value": st.utterance })
                                    setst({ ...st, utterances, utterance: null })
                                }} />
                            </Space>
                            <Divider > Available Utterances </Divider>
                            <List
                                header={<p>Utterances of {st.intentSelected} </p>}
                                itemLayout='horizontal'
                                bordered
                                dataSource={st.utterances.filter((rec) => rec.intents == st.intentSelected)}
                                renderItem={item => (
                                    <List.Item>
                                        <Typography.Text>{item.value}</Typography.Text>
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>

                </Card>
            </Col>
        </Row>
    )
}

const RenderEmail = (props) => {
    const { next, state, setState, prev } = props
    //Email Box, Microsoft graph client identifier, Microsoft graph client secret
    return (
        <Row>
            <Col span={24}>
                <Card>
                    <Form.Item name={["channel", "email", "address"]} label="Email Box / Address ID" rules={[{ required: true, message: 'Please input your E-Mail Address' }]}>
                        <Input
                            inputMode='email'
                        />
                    </Form.Item>
                    <Form.Item name={["channel", "email", "clientID"]} label="client identifier / Client ID" rules={[{ required: true, message: 'Please input your  client identifier' }]}>
                        <Input
                            inputMode='email'
                        />
                    </Form.Item>
                    <Form.Item name={["channel", "email", "clientSecret"]} label="client secret " rules={[{ required: true, message: 'Please input your  client secret' }]}>
                        <Input
                            inputMode='email'
                        />
                    </Form.Item>
                </Card>
            </Col>
        </Row>
    )
}

const RenderPhone = (props) => {
    const { next, state, setState, prev } = props

    return (
        <Row>
            <Col span={24}>
                <Card>
                    <Form.Item name={["channel", "phone", "services"]} label="Services you want">
                        <Row style={{ marginBottom: 20 }}>
                            <Col span={8}>Outbound</Col>
                            <Col span={16}>
                                <Switch
                                    title='Outbound'
                                    defaultChecked
                                    onChange={() => setState({
                                        ...state,
                                        channel: {
                                            ...state.channel,
                                            phone: {
                                                ...state.channel.phone,
                                                isOutbound: !state.channel.phone.isOutbound
                                            }
                                        }
                                    })}
                                /></Col>

                        </Row>
                        <Row>
                            <Col span={8}>Inbound</Col>
                            <Col span={16}>
                                <Switch
                                    title='Inbound'
                                    defaultChecked
                                    onChange={() => setState({
                                        ...state,
                                        channel: {
                                            ...state.channel,
                                            phone: {
                                                ...state.channel.phone,
                                                isInbound: !state.channel.phone.isInbound
                                            }
                                        }
                                    })}

                                /></Col>

                        </Row>


                    </Form.Item>
                    <Form.Item name={["channel", "phone", "numberType"]} label="Which number do you want to use ?">
                        <Radio.Group>
                            <Radio.Button
                                defaultChecked={state.channel.phone.numberType === 'existing' ? true : false}
                                onChange={() => setState({
                                    ...state,
                                    channel: {
                                        ...state.channel,
                                        phone: {
                                            ...state.channel.phone,
                                            numberType: "existing"
                                        }
                                    }
                                })}
                                type='primary' value="existing">Use my old phone number</Radio.Button >
                            <Radio.Button
                                onChange={() => setState({
                                    ...state,
                                    channel: {
                                        ...state.channel,
                                        phone: {
                                            ...state.channel.phone,
                                            numberType: "new"
                                        }
                                    }
                                })}

                                value="newnumber">Allocate new number</Radio.Button >

                        </Radio.Group>
                    </Form.Item>
                    <Divider />

                    {state.channel.phone.numberType === 'existing' &&
                        <Form.Item label='Enter your number' name={["channel", "phone", "existing"]}
                            rules={[{ required: true, message: 'Please input your old number' }]} style={{ marginTop: '20px' }}>
                            <Input />
                        </Form.Item>
                    }

                    {state.channel.phone.numberType == 'new' &&
                        <div>

                            <Form.Item label='Choose New number options' name={["channel", "phone", "new"]}
                                rules={[{ required: true, message: 'Choose New number options' }]} style={{ marginTop: '20px' }}>
                                <Radio.Group defaultValue="tfn">
                                    <Radio.Button
                                        onChange={() => setState({
                                            ...state,
                                            channel: {
                                                ...state.channel,
                                                phone: {
                                                    ...state.channel.phone,
                                                    isnew: true,
                                                    new: "tfn"
                                                }
                                            }
                                        })}
                                        type='primary' value="TFN">Toll Free Number</Radio.Button >
                                    <Radio.Button
                                        onChange={() => setState({
                                            ...state,
                                            channel: {
                                                ...state.channel,
                                                phone: {
                                                    ...state.channel.phone,
                                                    isnew: true,
                                                    new: "did"
                                                }
                                            }
                                        })}
                                        value="DID">Direct Inward Dialing</Radio.Button >

                                </Radio.Group>
                            </Form.Item>
                            {state.channel.phone.new === 'tfn' &&
                                <Form.Item label='Number of Phone lines' name={["channel", "phone", "tfn"]}
                                    rules={[{ required: true, message: 'Please input your number of TFN required' }]} style={{ marginTop: '20px' }}>
                                    <Input />
                                </Form.Item>
                            }
                            {state.channel.phone.new === 'did' &&
                                <Form.Item label='Enter DID number' name={["channel", "phone", "did"]}
                                    rules={[{ required: true, message: 'Please input your DID number' }]} style={{ marginTop: '20px' }}>
                                    <Input />
                                </Form.Item>
                            }

                        </div>
                    }


                </Card>

            </Col>
        </Row>
    )
}

export default ChooseChannel;
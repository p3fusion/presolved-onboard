import { Col, Row, Typography, Divider, Menu, Form , Card, Space, Button} from 'antd';
import React, { useState } from 'react';
import CreateNewTemplate from '../newTemplate';
import ils1 from '../../assets/images/illustrations/signup-5.svg';
import { payload } from '../payload';
import { useDispatch } from 'react-redux';
import { updateStep3 } from '../../store/reducers/steps';

const ConfigureCases = (props) => {

    const { next, state, setState, prev } = props
    const dispatch = useDispatch()
    const [st, setSt] = useState(null);
   
    
    return (
        <div className='template-section'>
        
                <Row>

                    <Col span={6} style={{ padding: "50px 10px" }}>

                        <Typography.Title level={4}>Choose Pre Template</Typography.Title>
                        <Menu
                            items={payload.templates.map((template) => {
                                return {
                                    label: template.name, key: template.id
                                }
                            })
                        }
                            onSelect={(e) => {
                                let record = payload.templates.filter((rec) => rec.id == e.key)
                                setSt(record[0])
                            }}

                        />
                    </Col>
                    <Col span={18}>


                        <CreateNewTemplate

                            location={{
                                "state": {
                                    id: st ? 2 : null,
                                    edit: st ? true : false,
                                    record: st ? st : {}
                                }
                            }}

                        />

                    </Col>
                </Row>
                <Card>
                    <Space>
                        <Button type="ghost" size='large' onClick={() => prev()} >Previous</Button>
                        <Button type="primary"  size='large' 
                        onClick={() => {
                            dispatch(updateStep3(payload.templates)),
                            next()
                        }}
                        >Next</Button>
                    </Space>
                </Card>
        </div>
    );
};

export default ConfigureCases;
import { Col, Row, Typography, Divider, Menu } from 'antd';
import React, { useState } from 'react';
import CreateNewTemplate from '../newTemplate';
import ils1 from '../../assets/images/illustrations/signup-5.svg';
import { payload } from '../payload';
const ConfigureCases = (props) => {

    const { next, state, setState, prev } = props

    const [st,setSt]=useState(null);

    return (
        <div className='template-section'>
            <Row>
    
                <Col span={6} style={{padding:"50px 10px"}}>                  
                   
                    <Typography.Title level={4}>Choose Pre Template</Typography.Title>
                    <Menu
                        items={payload.templates.map((template) => {
                            return {
                                label: template.name, key: template.id
                            }
                        })}
                        onSelect={(e)=>{
                            let record=payload.templates.filter((rec) => rec.id == e.key)
                           
                            setSt( record[0])
                        }}
                     
                    />
                </Col>
                <Col span={18}>
                   
                   
                    <CreateNewTemplate 
                  
                        location={{
                            "state": {
                                id: st ? 2 : null,
                                edit: st ? true : false,
                                record: st ? st  : {}
                            }
                        }} 
                    
                    />

                </Col>
            </Row>

        </div>
    );
};

export default ConfigureCases;
import { Steps } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import SelectAccount from './selectAccount';
import ChooseChannel from './chooseChannel';
import ConfigureCases from './configureCases';
import Review from './review';

const { Step } = Steps;

const OnBoardSteps = () => {

  const [state, setState] = useState({
    current: 0,
    accounts: [
      { label: 'Self Managed AWS account', value: 0 },
      { label: 'Presolved Managed AWS account', value: 1 }
    ],
    accountType: null,
    channel: {
      isPhoneSelected: true,
      isEmailSelected: false,
      isChatSelected: false,
      phone: {
        isInbound: true,
        isOutbound: true,
        numberType: "existing",
        isnew: false,
        new: "tfn",
        phoneNumberOptions: [
          { label: 'Use your existing phone number', value: 'oldNumber' },
          { label: 'Allocate new number', value: 'newNumber' }
        ],
        phoneNumberSubOptions: [
          { label: 'TFN', value: 'TFN' },
          { label: 'DID', value: 'DID' }
        ]
      },
      email: {},
      chat: {
        intentSelected: "greetings",
        intent: null,
        utterance: null,
        intents: [
          { "label": "Greetings", "value": "greetings" },
          { "label": "Welcome", "value": "welcome" },
          { "label": "Inquiry", "value": "inquiry" },
          { "label": "Operator", "value": "operator" },
          { "label": "Renewal", "value": "renewal" },
        ],
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
      },

    },
    step1: {},
    step2: {},
    step3: {},

  })

  const next = () => setState({ ...state, current: state.current + 1 });
  const prev = () => setState({ ...state, current: state.current - 1 });
  const onChange = (value) => setState({ ...state, current: value });

  const steps = [
    {
      title: 'Select Account',
      content: <SelectAccount state={state} setState={setState} next={next} />,
    },
    {
      title: 'Choose channel',
      content: <ChooseChannel state={state} setState={setState} next={next} prev={prev} />,
    },
    {
      title: 'Configure cases',
      content: <ConfigureCases state={state} setState={setState} next={next} prev={prev} />,
    },
    {
      title: 'Review',
      content: <Review state={state} setState={setState} prev={prev} />,
    },
  ];


  return (
    <Content className='Steps' >
      <Steps current={state.current} onChange={onChange} >
        {steps.map((item, index) => <Step key={index} title={item.title} />)}
      </Steps>
      <div className="steps-content" style={{ margin: '50px 3px 50px 3px' }}>{steps[state.current].content}</div>
    </Content>
  );
};
export default OnBoardSteps;
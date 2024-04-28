import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Input, Button, Typography} from 'antd';
import axios from 'axios';
import {ENV} from '../consts/config';

const {Title} = Typography;

const LoginPage = ({onUpdateLoading, onUpdateName}) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    sendDataToParent(true);
    console.log('Login:', values);

    axios
      .post(
        `${ENV.baseUrl}/giudici/richiestaId`,
        {
          cognome: values.surname,
          nome: values.name,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true',
          },
        }
      )
      .then((res) => {
        if (res?.data?.id) {
          sendDataToParent(false, values.name);
          navigate('/card-list');
        }
      });

    // setTimeout(() => {
    //   let res = null;
    //   if ((values.name === 'a', values.surname === 'a')) {
    //     res = true;
    //     sendDataToParent(false, values.name);
    //   }
    //   if (res) navigate('/card-list');
    // }, 3000);
  };

  const sendDataToParent = (loading, name) => {
    onUpdateLoading(loading);
    onUpdateName(name);
  };

  return (
    <>
      <Title level={1}>Are you ready to choose the best couples you've ever seen? 🤩</Title>
      <Title level={2}>Identify yourself and start judging.</Title>
      <Form name='login-form' onFinish={onFinish}>
        <Form.Item name='name' rules={[{required: true, message: 'Name'}]}>
          <Input placeholder='Name' />
        </Form.Item>
        <Form.Item name='surname' rules={[{required: true, message: 'Surname'}]}>
          <Input placeholder='Surname' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginPage;

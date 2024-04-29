import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Input, Button, Typography} from 'antd';
import axios from 'axios';
import {ENV} from '../consts/config';

const {Title} = Typography;

const LoginPage = ({onUpdateLoading, onUpdateName, onUpdatePrimaryColor, primaryColor}) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    onUpdateLoading(true);
    console.log('Login:', values);

    if (values.name === 'admin' && values.surname === 'admin') {
      sendDataToParent(false, values.name, '#FF1818');
      navigate('/admin');
    }

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
        if (res?.data) {
          sendDataToParent(false, values.name);
          navigate('/card-list');
        }
      });

    // setTimeout(() => {
    //   let res = null;
    //   if ((values.name === 'a', values.surname === 'a')) {
    //     res = true;
    //     sendDataToParent(false, values.name, primaryColor);
    //   }
    //   if (res) navigate('/card-list');
    // }, 3000);
  };

  const sendDataToParent = (loading, name, color) => {
    onUpdateLoading(loading);
    onUpdateName(name);
    onUpdatePrimaryColor(color);
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

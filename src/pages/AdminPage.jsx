import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Input, Button, Typography, notification} from 'antd';
import axios from 'axios';
import {ENV} from '../consts/config';

const {Title} = Typography;

const AdminPage = ({onUpdateLoading, onUpdateName, onUpdatePrimaryColor, name}) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    onUpdateLoading(true);

    axios
      .post(`${ENV.baseUrl}/users/userList`, values.pairs, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': 'true',
        },
      })
      .then((res) => {
        if (res?.data) {
          notification.success({
            message: 'Incredible!',
            description: 'couples were created.',
            duration: 0,
          });
          sendDataToParent(false, null, '#1890FF');
          navigate('/');
        }
      });

    // setTimeout(() => {
    //   notification.success({
    //     message: 'Incredible!',
    //     description: 'couples were created.',
    //     duration: 0,
    //   });
    //   console.log(values);
    //   sendDataToParent(false, null, '#1890FF');
    //   navigate('/');
    // }, 3000);
  };

  const sendDataToParent = (loading, name, color) => {
    onUpdateLoading(loading);
    onUpdateName(name);
    onUpdatePrimaryColor(color);
  };

  return (
    <>
      <Title level={1}>Hello, {name}.</Title>
      <Title level={1}>Insert the pairs</Title>
      <Form name='pairs-form' onFinish={onFinish}>
        <Form.Item name='pairs' rules={[{required: true, message: 'Insert value'}]}>
          <Input placeholder='Pairs' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Insert
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AdminPage;

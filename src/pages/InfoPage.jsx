import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Input, Button, Typography} from 'antd';
import axios from 'axios';

const {Title} = Typography;

const InfoPage = ({onUpdateLoading, onUpdateName}) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    sendDataToParent(true);
    console.log('Login:', values);

    // axios
    //   .get(`http://192.168.1.125:8090/garaCoppia/richiestaId`, {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Headers': '*',
    //       'Access-Control-Allow-Credentials': 'true',
    //     },
    //   })
    //   .then((res) => {
    //     if (res.data) {
    //       sendDataToParent(false, values.name);
    //       navigate('/card-list');
    //     }
    //   });

    setTimeout(() => {
      let res = null;
      if ((values.name === 'a', values.surname === 'a')) {
        res = true;
        sendDataToParent(false, values.name);
      }
      if (res) navigate('/card-list');
    }, 3000);
  };

  const sendDataToParent = (loading, name) => {
    onUpdateLoading(loading);
    onUpdateName(name);
  };

  return (
    <>
      <Title level={1}>Fine 🤩</Title>
    </>
  );
};

export default InfoPage;

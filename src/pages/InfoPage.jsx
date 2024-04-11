import {Typography, Button} from 'antd';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const {Title} = Typography;

const InfoPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <Title level={1}>Are you ready for another vote 🧐?</Title>
      <Button type='primary' onClick={() => navigate('/card-list')}>
        GO!
      </Button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '40vh',
  },
};

export default InfoPage;

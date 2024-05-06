import React, {useEffect, useState} from 'react';
import {Card, Button, Typography, notification, Rate, Modal} from 'antd';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {ENV} from '../consts/config';

const labelStyle = {
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '8px',
};

const rowStyle = {
  marginBottom: '16px',
};

const rateContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const gridStyle = {
  width: '25%',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '18px',
  margin: '10px',
};
const {Title} = Typography;

const LastRoundPage = ({onUpdateLoading, batteryList, primaryColor, name}) => {
  const [titleCard, setTitleCard] = useState('Choose the couple you want to vote');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ratings, setRatings] = useState({
    tempo: 3,
    tecnica: 3,
    difficoltà: 3,
    musicalità: 3,
    connessione: 3,
  });

  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleRatingChange = (key, value) => {
    setRatings({...ratings, [key]: value});
  };

  const sendDataToParent = (loading) => {
    onUpdateLoading(loading);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Title level={1}>Hello, {name}.</Title>
        <Title level={3}>Now we have the fantastic finalists, up to you the deciding vote.</Title>
        <Card title={titleCard}>
          <Card.Grid key={1} style={gridStyle} hoverable={false} onClick={showModal}>
            {1}
          </Card.Grid>
        </Card>

        {/* <Button
          type='primary'
          disabled={false}
          style={{position: 'fixed', bottom: 20, right: 20}}
          onClick={() => console.log('click')}
        >
          RATE!
        </Button> */}
      </div>

      <Modal
        title={`You are voting for the couple ${1}`}
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={rowStyle}>
          <div style={labelStyle}>TIME:</div>
          <div style={rateContainerStyle}>
            <Rate value={ratings.tempo} onChange={(value) => handleRatingChange('tempo', value)} />
          </div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>EXECUTION TECHNIQUE:</div>
          <div style={rateContainerStyle}>
            <Rate value={ratings.tecnica} onChange={(value) => handleRatingChange('tecnica', value)} />
          </div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>DIFFICULTY IN EXECUTION :</div>
          <div style={rateContainerStyle}>
            <Rate value={ratings.difficoltà} onChange={(value) => handleRatingChange('difficoltà', value)} />
          </div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>MUSICALITY AND IMPROVISATION :</div>
          <div style={rateContainerStyle}>
            <Rate value={ratings.musicalità} onChange={(value) => handleRatingChange('musicalità', value)} />
          </div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>COUPLE CONNECTION:</div>
          <div style={rateContainerStyle}>
            <Rate value={ratings.connessione} onChange={(value) => handleRatingChange('connessione', value)} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LastRoundPage;

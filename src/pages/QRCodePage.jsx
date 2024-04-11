import {Image, Typography} from 'antd';
import React from 'react';
import QRCode from '../assets/img/qrcode.png';

const qrCodeContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
};

const {Text} = Typography;

const QRCodePage = ({}) => {
  return (
    <>
      <div style={qrCodeContainer}>
        <Image width={200} src={QRCode} />
      </div>
      <Text keyboard>Created and Develop By Karim and Homero</Text>
    </>
  );
};

export default QRCodePage;

import {Image} from 'antd';
import React from 'react';
import QRCode from '../assets/img/qrcode.png';

const qrCodeContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
};

const QRCodePage = ({}) => {
  return (
    <div style={qrCodeContainer}>
      <Image width={200} src={QRCode} />
    </div>
  );
};

export default QRCodePage;

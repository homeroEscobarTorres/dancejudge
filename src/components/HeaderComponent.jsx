import {Button, ColorPicker, Layout, Typography} from 'antd';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const {Header} = Layout;
const {Title} = Typography;

const HeaderComponent = ({onUpdatePrimaryColor}) => {
  const [primary, setPrimary] = React.useState('#1890ff');
  const navigate = useNavigate();

  const sendDataToParent = (color) => {
    onUpdatePrimaryColor(color);
    setPrimary(color);
  };

  const logout = () => {
    navigate('/login');
  };

  return (
    <Header style={{background: primary, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Title level={5} style={{color: '#fff', margin: 0}}>
        BSW Congress
      </Title>
      <div style={{background: primary, display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
        <ColorPicker
          showText
          value={primary}
          onChangeComplete={(color) => {
            sendDataToParent(color.toHexString());
          }}
        />
        <Button type='primary' onClick={() => logout()}>
          {'Logout'}
        </Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;

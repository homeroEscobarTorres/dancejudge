import {Button, ColorPicker, Layout, Typography, Image} from 'antd';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import luffy from '../assets/img/luffy.gif';

const {Header} = Layout;
const {Title} = Typography;

const HeaderComponent = ({onUpdatePrimaryColor, onUpdateName, name}) => {
  const navigate = useNavigate();
  const [primary, setPrimary] = React.useState('#1890ff');
  const [click, setClick] = useState(0);

  const sendDataToParent = (color) => {
    onUpdatePrimaryColor(color);
    setPrimary(color);
  };

  const logout = () => {
    onUpdateName('');
    navigate('/login');
    setClick(click + 1);
  };

  return (
    <>
      {click === 12 ? (
        <Image
          preview={{
            visible: true,
            width: 800,
          }}
          width={200}
          src={luffy}
        />
      ) : (
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
              {name ? 'Logout' : 'Login'}
            </Button>
          </div>
        </Header>
      )}
    </>
  );
};

export default HeaderComponent;

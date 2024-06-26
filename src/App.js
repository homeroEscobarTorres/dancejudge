import {ConfigProvider, Layout, Spin} from 'antd';
import React, {useState} from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.less';
import HeaderComponent from './components/HeaderComponent';
import CardListPage from './pages/CardListPage';
import LastRoundPage from './pages/LastRoundPage';
import LoginPage from './pages/LoginPage';
import InfoPage from './pages/InfoPage';
import QRCodePage from './pages/QRCodePage';
import AdminPage from './pages/AdminPage';

const {Content} = Layout;

const App = () => {
  const [primaryColor, setPrimaryColor] = useState('#1890ff');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [batteryList, setBatteryList] = useState([]);

  const updatePrimaryState = (dataFromChild) => {
    setPrimaryColor(dataFromChild);
  };

  const updateLoadingState = (dataFromChild) => {
    setLoading(dataFromChild);
  };

  const updateNameState = (dataFromChild) => {
    setName(dataFromChild);
    console.log(dataFromChild);
  };

  const updateBatteryList = (dataFromChild) => {
    setBatteryList(dataFromChild);
    console.log(dataFromChild);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
        },
      }}
    >
      <Router>
        <Layout style={{minHeight: '100vh'}}>
          <HeaderComponent
            onUpdatePrimaryColor={updatePrimaryState}
            onUpdateName={updateNameState}
            primaryColor={primaryColor}
            name={name}
          ></HeaderComponent>
          <Spin spinning={loading}>
            <Content style={{padding: '20px'}}>
              <Routes>
                <Route exact path='/' element={<QRCodePage />} />
                <Route
                  exact
                  path='/login'
                  element={
                    <LoginPage
                      onUpdateLoading={updateLoadingState}
                      onUpdateName={updateNameState}
                      onUpdatePrimaryColor={updatePrimaryState}
                      primaryColor={primaryColor}
                    />
                  }
                />
                <Route
                  path='/card-list'
                  element={
                    <CardListPage
                      onUpdateLoading={updateLoadingState}
                      onUpdateBatteryList={updateBatteryList}
                      batteryList={batteryList}
                      primaryColor={primaryColor}
                      name={name}
                    />
                  }
                />
                <Route
                  path='/last-round'
                  element={
                    <LastRoundPage
                      onUpdateLoading={updateLoadingState}
                      batteryList={batteryList}
                      primaryColor={primaryColor}
                      name={name}
                    />
                  }
                />
                <Route
                  path='/info'
                  element={<InfoPage onUpdateLoading={updateLoadingState} primaryColor={primaryColor} name={name} />}
                />
                <Route
                  path='/admin'
                  element={
                    <AdminPage
                      onUpdateLoading={updateLoadingState}
                      onUpdateName={updateNameState}
                      onUpdatePrimaryColor={updatePrimaryState}
                      name={name}
                    />
                  }
                />
              </Routes>
            </Content>
          </Spin>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;

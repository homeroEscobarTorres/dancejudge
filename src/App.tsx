import React, { useState, useContext, useEffect } from "react";
import { Moon, Sun } from "grommet-icons";
import axios from 'axios';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  grommet,
  Grommet,
  Header,
  Heading,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  ResponsiveContext,
  Text
} from "grommet";
import CardTemplate from "./components/cardTemplate";
import { deepMerge } from "grommet/utils";

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
});

interface Batteria {
  eliminato: string;
  id: number;
  numeroBatterie: 1;
  selezionato: any;
  userCoppia: any
}

const AppBar = (props: any) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="small"
    {...props}
  />
);

const App = () => {
  const [dark, setDark] = useState(false);
  const [batterie, setBatterie] = useState([]);

  const getBatteria = () => {
    axios.get(`http://192.168.1.125:8090/garaCoppia/batterie2`,  {headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true'}
    })
    .then((res: any) => {
      const batterie = res.data.map((bat: any) => bat.numeroBatteria)
      console.log(batterie)
      setBatterie(res.data);
    })
  };

  const postBatteria = () => {
    axios.post(`http://192.168.1.125:8090/garaCoppia/selezionaCoppie`,  {headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true'}
    },{

    })
    .then(res => {
      console.log(res.data)
      setBatterie(res.data);
    })
  };

  useEffect(()=>{
    getBatteria()
  }, [])

  // Stile per il bottone "SEND"
  const sendButtonStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '20px', // Distanza dal basso
    right: '20px', // Distanza da destra
  };

  // Funzione per inviare i dati (simulazione)
  const handleSendData = () => {
    // Qui puoi implementare la logica per inviare i dati
    // console.log('Dati inviati:', selectedCards);
    // // Resetta la selezione dopo l'invio dei dati
    // setSelectedCards([]);
  };

  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <Page>
        <AppBar>
          <Text size="large">Dance Judge</Text>
          <Button
            a11yTitle={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            icon={dark ? <Moon /> : <Sun />}
            onClick={() => setDark(!dark)}
            tip={{
              content: (
                <Box
                  pad="small"
                  round="small"
                  background={dark ? "dark-1" : "light-3"}
                >
                  {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </Box>
              ),
              plain: true,
            }}
          />
        </AppBar>
        <PageContent>
          <PageHeader title="Start judging" />
            {batterie?.map((batteria: any) => (
              <CardTemplate index={batteria.id} title={batteria.id} />
            ))}
        </PageContent>
      </Page>
      <Button
        label="SEND"
        onClick={handleSendData}
        primary
        style={sendButtonStyle}
      />
    </Grommet>
  );
};

export default App;

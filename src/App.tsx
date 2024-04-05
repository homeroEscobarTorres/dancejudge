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

const AppBar = (props: any) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="small"
    {...props}
  />
);

const CardTemplate = ({ title }: any) => {
  const size = useContext(ResponsiveContext);
  return (
    <Card height="small" width="small">
      <CardHeader pad="small">
        <Heading level={2} margin="none">
          {title}
        </Heading>
      </CardHeader>
      <CardBody pad="small">
        <Paragraph maxLines={size === "small" ? 3 : undefined}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          porttitor non nulla ac vehicula. Aliquam erat volutpat. Mauris auctor
          faucibus est at mattis. Aliquam a enim ac nisi aliquam consectetur et
          ac velit. Mauris ut imperdiet libero.
        </Paragraph>
      </CardBody>
    </Card>
  );
};



const App = () => {
  const [dark, setDark] = useState(false);
  const [batterie, setBatterie] = useState([{}]);

  const getBatteria = () => {
    axios.get(`http://localhost:8090/garaCoppia/batterie2`,  {headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true'}
    })
    .then(res => {
      setBatterie(res.data);
      console.log(res)
    })
  //   const res: any[] = [
  //     {name: 'batteria1'},
  //     {name: 'batteria2'},
  //     {name: 'batteria3'},
  //     {name: 'batteria4'},
  //     {name: 'batteria5'},
  //     {name: 'batteria6'},
  //     {name: 'batteria7'},
  //     {name: 'batteria8'},
  //     {name: 'batteria9'},
  //     {name: 'batteria10'},
  //     {name: 'batteria11'},
  //     {name: 'batteria12'},
  //     {name: 'batteria13'},
  //     {name: 'batteria14'},
  //   ]
  //   setTimeout(() => setBatterie(res), 3000)
  };

  useEffect(()=>{
    getBatteria()
  }, [])

  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <Page>
        <AppBar>
          <Text size="large">My App</Text>
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
          <PageHeader title="Welcome to Grommet!" />
          <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
            {batterie.map((batteria: any) => (
              <>
                <CardTemplate title={batteria.nome} />
                <CardTemplate title={batteria.nome} />
                <CardTemplate title={batteria.nome} />
              </>
            ))}
          </Grid>
        </PageContent>
      </Page>
    </Grommet>
  );
};

export default App;
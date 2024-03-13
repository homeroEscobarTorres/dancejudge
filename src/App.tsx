import React from 'react';
import { Grommet, Header, Page, PageContent, PageHeader, Text  } from 'grommet'

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props: any) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    {...props}
  />
);

const App = () => {
  return (
    <Grommet theme={theme} full>
      <Page>
      <AppBar>
       <Text size="large">Dance Judge</Text>
     </AppBar>
     <PageContent>
     <PageHeader title="Welcome to Dance Judge (Bachata Sensual Edition)!" />
   </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;

import React, {useEffect, useState} from 'react';
import {Card, Button, Typography, notification} from 'antd';
import axios from 'axios';

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

// MOCK
const cardData = {
  data: [
    {
      id: 1,
      userCoppia: {
        id: 1,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 1,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 2,
      userCoppia: {
        id: 2,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 1,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 3,
      userCoppia: {
        id: 3,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 1,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 4,
      userCoppia: {
        id: 4,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 1,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 5,
      userCoppia: {
        id: 5,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 1,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 6,
      userCoppia: {
        id: 6,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 1,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 7,
      userCoppia: {
        id: 7,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 1,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 8,
      userCoppia: {
        id: 8,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 1,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 9,
      userCoppia: {
        id: 9,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 1,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 10,
      userCoppia: {
        id: 10,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 1,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 11,
      userCoppia: {
        id: 11,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 2,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 12,
      userCoppia: {
        id: 12,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 2,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 13,
      userCoppia: {
        id: 13,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 2,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 14,
      userCoppia: {
        id: 14,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 2,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 15,
      userCoppia: {
        id: 15,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 2,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 16,
      userCoppia: {
        id: 16,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 2,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 17,
      userCoppia: {
        id: 17,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 2,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 18,
      userCoppia: {
        id: 18,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 2,
      eliminato: 'Eliminato',
      selezionato: null,
    },
    {
      id: 19,
      userCoppia: {
        id: 19,
        votoList: [],
        dataDiNascita: '1993-09-04',
        nome: 'Karim',
        cognome: 'Cheikh',
        email: 'karimcheikh7@gmail.com',
        sesso: 'M',
        nomePartner: 'Denise',
        cognomePartner: 'Ferrando',
        dataDiNascitaPartner: '1972-11-24',
        sessoPartner: 'F',
      },
      numeroBatteria: 2,
      eliminato: 'Eliminato',
      selezionato: null,
    },
  ],
};
// MOCK

const CardListPage = ({primaryColor, onUpdateLoading, name}) => {
  const [valueCards, setValueCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (index) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(selectedCards.filter((cardIndex) => cardIndex !== index));
    } else if (selectedCards.length < 10) {
      setSelectedCards([...selectedCards, index]);
    }
  };

  const getCardStyle = (index) => {
    return selectedCards.includes(index) ? {...gridStyle, backgroundColor: primaryColor} : gridStyle;
  };

  const loadBatteries = () => {
    onUpdateLoading(true);
    // axios
    //   .get(`http://192.168.1.125:8090/garaCoppia/batterie`, {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Headers': '*',
    //       'Access-Control-Allow-Credentials': 'true',
    //     },
    //   })
    //   .then((res) => {
    //     if (res.data) {
    //       sendDataToParent(false);
    //       // navigate('/card-list');
    //     }
    //   });

    setTimeout(() => {
      if (cardData?.data?.length > 0) {
        const batterie = groupElementsByBatteryNumber(cardData.data);
        console.log(batterie);
        sendDataToParent(false);
        setValueCards(batterie['1']);
      }
    }, 3000);
  };

  const groupElementsByBatteryNumber = (dataArray) => {
    const groupedData = {};

    dataArray.forEach((item) => {
      const batteryNumber = item.numeroBatteria;
      if (!groupedData[batteryNumber]) {
        groupedData[batteryNumber] = [];
      }
      groupedData[batteryNumber].push(item);
    });

    // const groupedArrays = {};
    // for (const batteryNumber in groupedData) {
    //   groupedArrays[batteryNumber] = [];
    //   const items = groupedData[batteryNumber];
    //   for (let i = 0; i < items.length; i += 10) {
    //     groupedArrays[batteryNumber].push(items.slice(i, i + 10));
    //   }
    // }

    // return groupedArrays;

    return groupedData;
  };

  useEffect(() => {
    loadBatteries();
  }, [setValueCards]);

  const sendDataToParent = (loading) => {
    onUpdateLoading(loading);
  };

  const handleRateClick = () => {
    sendDataToParent(true);

    // axios
    //   .post(`http://192.168.1.125:8090/garaCoppia/selezionaCoppie`, {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Headers': '*',
    //       'Access-Control-Allow-Credentials': 'true',
    //     },
    //     data: {
    //       coppieSelezionate: selectedCard,
    //     }
    //   })
    //   .then((res) => {
    //     if (res.data) {
    //       sendDataToParent(false);
    //     }
    //   });

    setTimeout(() => {
      if (selectedCards?.length > 0) {
        console.log(selectedCards);
        notification.success({
          message: 'Incredible!',
          description: 'How nice to be a judge, no one can judge you. Great job you chose your couples.',
          duration: 0,
        });
      }
    }, 3000);
  };

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Title level={1}>Hello, {name}.</Title>
      <Title level={3}>Choose the couples you like most:</Title>
      <Card title={'BATERIA NUMBER'}>
        {valueCards.map((item) => (
          <Card.Grid
            key={item?.userCoppia?.id}
            style={getCardStyle(item?.userCoppia?.id)}
            onClick={() => handleCardClick(item?.userCoppia?.id)}
          >
            {item?.userCoppia?.id}
          </Card.Grid>
        ))}
      </Card>
      <Button
        type='primary'
        disabled={selectedCards?.length < 10}
        style={{position: 'fixed', bottom: 20, right: 20}}
        onClick={() => handleRateClick()}
      >
        RATE!
      </Button>
    </div>
  );
};

export default CardListPage;
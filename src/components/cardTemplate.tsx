import React, { useContext, useState } from 'react';
import { ResponsiveContext, Card, CardHeader, Heading, Button } from 'grommet'; // Importa i componenti necessari da Grommet

interface CardTemplateProps {
  title: string;
  index: number;
}

const CardTemplate: React.FC<CardTemplateProps> = ({ index, title }) => {
  const size = useContext(ResponsiveContext); // Ottieni la dimensione corrente dello schermo

  // State per tenere traccia delle card selezionate
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  // Funzione per gestire il click su una card
  const handleClick = (index: number) => {
    if (selectedCards.includes(index)) {
      // Rimuovi la card se già selezionata
      setSelectedCards(selectedCards.filter((cardIndex) => cardIndex !== index));
    } else {
      // Aggiungi la card se non è già selezionata
      setSelectedCards([...selectedCards, index]);
    }
  };

  // Funzione per determinare lo stile delle card in base allo stato di selezione
  const getCardStyle = (index: number) => {
    return selectedCards.includes(index) ? { backgroundColor: '#228be6' } : {};
  };

  // Stile per il contenitore delle card
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px', // Spazio tra le card
    position: 'relative', // Per consentire il posizionamento assoluto del bottone
  };

  return (
    <div style={containerStyle}>
        <Card
          key={index}
          style={{ width: '160px', height: '160px', ...getCardStyle(index) }}
          onClick={() => handleClick(index)}
        >
          <CardHeader pad="small">
            <Heading level={2} margin="none">
              {title}
            </Heading>
          </CardHeader>
        </Card>
    </div>
  );
};

export default CardTemplate;

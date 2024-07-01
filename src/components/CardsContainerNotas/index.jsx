import {
  BoxCard,
  ContainerCards,
  TitleCard,
  Wrapper
} from './styles'
import { Cards } from '../Cards'
import React, { useState, useEffect } from 'react';

const CardsContainerNotas = ({ busca }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];
    setCards(storedList);
  }, []);

  const filteredCards = cards
    .filter(card => card.title.includes(busca))
    .filter(card => card.type === "nota")
    .reverse();

  return (
    <ContainerCards>
      <Wrapper>
        
        <BoxCard>
          {filteredCards.map((card, index) => (
            <Cards
              key={index}
              title={card.title || "Sem título"}
              description={card.description || "Sem descrição"}
              date={card.date || "Sem data"}
              id={card.id}
            />
          ))}
        </BoxCard>
      </Wrapper>
    </ContainerCards>
  );
}

export { CardsContainerNotas }

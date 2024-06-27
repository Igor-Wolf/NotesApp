
import {
  BoxCard,
  ContainerCards,
  TitleCard,
  Wrapper
 } from './styles'
import { Cards } from '../Cards'
import React, { useState, useEffect } from 'react';
import { CardsComp } from '../CardsComp';


const CardsContainerCompRed = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];
    setCards(storedList);
  }, []);

  const filteredCards = cards.filter(card => card.type === "compromisso" && card.status === "Lose");
  const lastEightCards = filteredCards.slice(-8).reverse();

  return (
    
    <ContainerCards> 
      <Wrapper>
        <TitleCard>Ultimos Compromissos</TitleCard>
        
        <BoxCard>
        

{lastEightCards.map((card, index) => (
  <CardsComp
    key={index}
    title={card.title || "Sem título"}
    description={card.description || "Sem descrição"}
    date={card.date || "Sem data"}
    deadLine={card.deadLineDate}
    status={card.status}
    id={card.id}
  />
))}

          </BoxCard>
        
      </Wrapper>
      </ContainerCards>
      
      
  )
}

export {CardsContainerCompRed}
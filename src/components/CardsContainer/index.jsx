
import {
  BoxCard,
  ContainerCards,
  TitleCard,
  Wrapper
 } from './styles'
import { Cards } from '../Cards'
import React, { useState, useEffect } from 'react';


const CardsContainer = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];
    setCards(storedList);
  }, []);

  const filteredCards = cards.filter(card => card.type === "nota");
  const lastEightCards = filteredCards.slice(-8).reverse();

  return (
    
    <ContainerCards> 
      <Wrapper>
        <TitleCard>Ultimas Notas</TitleCard>
        
        <BoxCard>
          
        {lastEightCards.map((card, index) => (
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
      
      
  )
}

export {CardsContainer}
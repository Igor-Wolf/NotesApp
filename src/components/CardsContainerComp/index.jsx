import {
  BoxCard,
  ContainerCards,
  TitleCard,
  Wrapper
} from './styles';
import { CardsComp } from '../CardsComp';
import React, { useState, useEffect } from 'react';
import { parse, isBefore, isEqual, format } from 'date-fns';

const CardsContainerComp = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const checkDeadlines = () => {
      const now = new Date();
      const currentDate = format(now, 'dd/MM/yyyy');
      const currentTime = now.toTimeString().split(' ')[0];

      const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];

      storedList.forEach((item) => {
        console.log(`Item Deadline Time: ${item.deadLineTime}, Current Date: ${currentTime}`);
        console.log(item.status)
        if ((item.deadLineDate && item.deadLineTime) && item.status === 'InTime') {
          const itemDate = format(parse(item.deadLineDate, 'dd/MM/yyyy', new Date()), 'dd/MM/yyyy');
          const itemTime = item.deadlineTime;
          

          if (isBefore(parse(itemDate, 'dd/MM/yyyy', new Date()), parse(currentDate, 'dd/MM/yyyy', new Date()))) {
            item.status = 'Lose';
            console.log("entrou aqui")
          } else if (isEqual(parse(itemDate, 'dd/MM/yyyy', new Date()), parse(currentDate, 'dd/MM/yyyy', new Date())) && item.deadLineTime < currentTime) {
            item.status = 'Lose';
          }
        
        }
      });

      // Atualizando o localStorage com os status atualizados
      localStorage.setItem('formDataList', JSON.stringify(storedList));

      return storedList;
    };

    const storedList = checkDeadlines();
    setCards(storedList);
  }, []);

  const filteredCards = cards.filter((card) => card.type === 'compromisso');
  const lastEightCards = filteredCards.slice(-8).reverse();

  return (
    <ContainerCards>
      <Wrapper>
        <TitleCard>Ultimos Eventos</TitleCard>
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
  );
};

export { CardsContainerComp };

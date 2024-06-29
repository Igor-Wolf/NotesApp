// Em Cards.js
import React from 'react';
import { DateCard, DescriptionCard, TitleCard, WrapperCard } from './style';
import Link from 'next/link';

const Cards = ({title, description, date, id}) => {
  console.log('Props recebidas:'); // Verifique se as props estão corretamente recebidas

  return (
    
    <Link href={`/Message/${id}`}>
      <WrapperCard>
      <TitleCard>
        <strong>{title}</strong> 
      </TitleCard>
      {/* <DescriptionCard>
        Descrição: {description}
      </DescriptionCard> */}
      <DateCard>
        <strong>Data:</strong> {date}
      </DateCard>
    </WrapperCard>
    
    </Link>
    
  );
};

export { Cards };

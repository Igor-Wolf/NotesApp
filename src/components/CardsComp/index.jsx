// Em Cards.js
import React from 'react';
import { DateCard, DescriptionCard, InfoCard, RowInfo, StatusCard, TitleCard, WrapperCard } from './style';
import Link from 'next/link';

const CardsComp = ({title, description, date, deadLine, status, id}) => {
  console.log('Props recebidas:'); // Verifique se as props estão corretamente recebidas
  const getColor = (condition) => {
    if (condition === "Late") return "red";
    if (condition === "OK") return "green";
    if (condition === "InTime") return "blue";
    return "defaultColor"; // Cor padrão, se necessário
  };
  
  return (
    <Link href={`/Message/${id}`}>
        <WrapperCard>
          <TitleCard>
            <strong>{title}</strong> 
          </TitleCard>
          {/* <DescriptionCard>
            Descrição: {description}
          </DescriptionCard> */}
          <RowInfo>
            <InfoCard>

              <DateCard>
                <strong>Criação:</strong>{date} 
              </DateCard>
              <DateCard>
                <strong>Evento:</strong> {deadLine}
              </DateCard>


            </InfoCard>
            <StatusCard bgcolor={getColor(status)}></StatusCard>


          </RowInfo>
          
          
        </WrapperCard>

    </Link>
    
  );
};

export { CardsComp };

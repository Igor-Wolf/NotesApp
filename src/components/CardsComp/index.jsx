// Em Cards.js
import React from 'react';
import { DateCard, DescriptionCard, InfoCard, RowInfo, StatusCard, TitleCard, WrapperCard } from './style';
import Link from 'next/link';

const CardsComp = ({title, description, date, deadLine, status, id}) => {
  console.log('Props recebidas:'); // Verifique se as props estão corretamente recebidas
  const getColor = (condition) => {
    if (condition === "Lose") return "red";
    if (condition === "OK") return "green";
    if (condition === "InTime") return "blue";
    return "defaultColor"; // Cor padrão, se necessário
  };
  
  return (
    <Link href={`/Message/${id}`}>
        <WrapperCard>
          <TitleCard>
            <strong>Titulo:</strong> {title}
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
            <StatusCard bgColor={getColor(status)}></StatusCard>


          </RowInfo>
          
          
        </WrapperCard>

    </Link>
    
  );
};

export { CardsComp };

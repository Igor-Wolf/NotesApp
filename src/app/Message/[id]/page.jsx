"use client"
import Image from "next/image";

import { Button } from "@/components/Button";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer";
import {
  Main,
  TitleMessage,
  DescriptionMessage,
  MessageContent,
  DateEvent,
  TimeEvent,
  DateCreate,
  TimeCreate,
  BoxMessage,
  RowDate
    
 } from "./styles";

import { useParams } from "next/navigation";
import { MobileHeader } from "@/components/MobileHeader";
import { BodyContent } from "@/app/styles";

export default function Message() {

    const params = useParams();

    const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];

    const note = storedList.filter(item => item.id === parseInt(params.id));
    console.log(note)


  return (
    <Main>

      <Header>

      </Header>
      <MobileHeader></MobileHeader>
      <BodyContent>
        <BoxMessage>
          <TitleMessage>{note[0].title}</TitleMessage>
          <DescriptionMessage><strong>Descrição:</strong> {note[0].description}</DescriptionMessage>

          <RowDate>
            <DateCreate><strong>Data de Criação:</strong> {note[0].date}</DateCreate>
            <TimeCreate><strong>Hora de Criação:</strong> {note[0].time}</TimeCreate>
          </RowDate>

          <RowDate>
            <DateEvent><strong>Data do Evento:</strong> {note[0].deadLineDate}</DateEvent>
            <TimeEvent><strong>Hora do Evento:</strong> {note[0].deadLineTime}</TimeEvent>
          </RowDate>     
          
          <MessageContent><strong>Mensagem:</strong> <br /> <br /> {note[0].message}</MessageContent>

        </BoxMessage>   


      </BodyContent>
      
      
      <Footer></Footer>
    </Main>
  );
}
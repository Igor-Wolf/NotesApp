"use client"
import Image from "next/image";
;
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
  RowDate,
  Status
    
 } from "./styles";

import { useParams, useRouter } from "next/navigation";
import { MobileHeader } from "@/components/MobileHeader";
import { BodyContent, Spacing } from "@/app/styles";

export default function Message() {  

  const params = useParams();
  const router = useRouter();

    const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];

    const note = storedList.filter(item => item.id === parseInt(params.id));
    const itemIndex = storedList.findIndex(item => item.id === parseInt(params.id));
  console.log(note)
  
    console.log(storedList[itemIndex].status)


  const concluir = () => {
      
    storedList[itemIndex].status = 'OK'
    localStorage.clear();
    localStorage.setItem('formDataList', JSON.stringify(storedList))
    console.log(storedList[itemIndex].status)
  }
  
  const andamento = () => {
      
    storedList[itemIndex].status = 'InTime'
    localStorage.clear();
    localStorage.setItem('formDataList', JSON.stringify(storedList))
    console.log(storedList[itemIndex].status)
  }

  const editar = () => {
    
    router.push(`/Editar/${params.id}`);
    
  }

  const excluir = () => {
    
    storedList.splice(itemIndex, 1); // Remove o item no índice itemIndex
    localStorage.clear();
    localStorage.setItem('formDataList', JSON.stringify(storedList));
    router.push('/');
  }

  return (
    <Main>

      <Header>

      </Header>
      <MobileHeader></MobileHeader>
      <BodyContent>
        <Spacing></Spacing>
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
          
          {/* <Status><strong>Status:</strong> {note[0].status}</Status> */}
          
          <MessageContent><strong>Mensagem:</strong> <br /> <br /> {note[0].message}</MessageContent>

        </BoxMessage>  
        <Button title="Concluir" variant='secondary' onClick={concluir} />
        <Button title="Em Andamento" variant='secondary' onClick={andamento} />
        <Button title="Editar" variant='secondary' onClick={editar} />
        <Button title="Excluir" variant='secondary' onClick={excluir} />


      </BodyContent>
      
      
      <Footer></Footer>
    </Main>
  );
}
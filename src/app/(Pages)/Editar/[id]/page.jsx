"use client"
import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  TitleText,
  Main,
  Spacing
} from './styles';
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { format, parseISO, parse } from 'date-fns';
import { MobileHeader } from '@/components/MobileHeader';
import { Wrapper } from './styles';

import { useParams, useRouter } from "next/navigation";


export default function Criar() {

  const params = useParams();
  const router = useRouter();

  const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];
  const note = storedList.filter(item => item.id === parseInt(params.id));
  const itemIndex = storedList.findIndex(item => item.id === parseInt(params.id));
  console.log(note)  
  console.log(storedList[itemIndex].status)


  const getInitialValue = (field) => {
    switch (field) {
      case 'description':
        return note[0].type === "nota" ? note[0].description : '';
      case 'title':
        return note[0].type === "nota" ? note[0].title : '';
      
      case 'message':
        return note[0].type === "nota" ? note[0].message : '';
      // Adicione aqui outras condições para os outros atributos
      default:
        return '';
    }
  };





  const [formData, setFormData] = useState({
    id: '',
    title: getInitialValue("title"),
    description: getInitialValue("description"),
    message: getInitialValue("message"),
    date: '',
    type: '',
    deadLineDate: '',
    deadLineTime: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedTime = new Date().toLocaleTimeString('pt-BR');
    const formattedDateTime = new Date().toLocaleDateString('pt-BR');
    const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];

    const verify = () => {
      if (storedList.length > 0) {
        return storedList[storedList.length - 1].id + 1;
      } else {
        return 1;
      }
    }

    const updatedFormData = {
      ...formData,
      date: formattedDateTime,
      time: formattedTime,
      id: verify(),
      type: 'nota',
      deadLineDate: null,
      deadLineTime: null,
      status: null,
    };

    storedList[itemIndex].title = updatedFormData.title
    storedList[itemIndex].description = updatedFormData.description
    storedList[itemIndex].message = updatedFormData.message
    storedList[itemIndex].type = 'nota'
    storedList[itemIndex].deadLineTime = updatedFormData.deadLineTime
    storedList[itemIndex].deadLineDate = updatedFormData.deadLineDate


    localStorage.setItem('formDataList', JSON.stringify(storedList));
    router.push(`/`); 

  };







  const getInitialValue2 = (field) => {
    switch (field) {
      case 'description':
        return note[0].type === "compromisso" ? note[0].description : '';
      case 'title':
        return note[0].type === "compromisso" ? note[0].title : '';
      
      case 'message':
        return note[0].type === "compromisso" ? note[0].message : '';
      
      case 'deadLineTime':
        return note[0].type === "compromisso" ? note[0].deadLineTime : '';
      case 'deadLineDate':
        if (note[0].type === "compromisso") {
          const parsedDate = parse(note[0].deadLineDate, 'dd/MM/yyyy', new Date());
          const formattedDate = format(parsedDate, 'yyyy-MM-dd'); 
          return note[0].type === "compromisso" ? formattedDate : '';
        }     
        
        
      
      // Adicione aqui outras condições para os outros atributos
      default:
        return '';
    }
  };







  const [formData2, setFormData2] = useState({
    id: '',
    title: getInitialValue2("title"),
    description: getInitialValue2("description"),
    message: getInitialValue2("message"),
    date: '',
    type: '',
    deadLineDate: getInitialValue2("deadLineDate"),
    deadLineTime: getInitialValue2("deadLineTime"),
    status: '',
  });

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value,
    });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    const formattedTime2 = new Date().toLocaleTimeString('pt-BR');
    const formattedDateTime2 = new Date().toLocaleDateString('pt-BR');
    const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];

    const verify2 = () => {
      if (storedList.length > 0) {
        return storedList[storedList.length - 1].id + 1;
      } else {
        return 1;
      }
    }

    // Ajustando a data do deadline antes de salvar
    const adjustedDeadLineDate = format(parseISO(formData2.deadLineDate), 'dd/MM/yyyy');

    const updatedFormData2 = {
      ...formData2,
      date: formattedDateTime2,
      time: formattedTime2,
      id: verify2(),
      type: 'compromisso',
      status: "InTime",
      deadLineDate: adjustedDeadLineDate,
    };


    storedList[itemIndex].title = updatedFormData2.title
    storedList[itemIndex].description = updatedFormData2.description
    storedList[itemIndex].message = updatedFormData2.message 
    storedList[itemIndex].deadLineDate = updatedFormData2.deadLineDate
    storedList[itemIndex].deadLineTime = updatedFormData2.deadLineTime
    storedList[itemIndex].type = 'compromisso'
    storedList[itemIndex].status = 'InTime'

    localStorage.setItem('formDataList', JSON.stringify(storedList));
    router.push(`/`); 



  };

  return (
    <Main>
      <Header />
      <MobileHeader />
      <Wrapper>
        <Spacing />
        <TitleText>Editar nota</TitleText>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Titulo:</Label>
            <Input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Descrição:</Label>
            <Input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}              
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Mensagem:</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></Textarea>
          </FormGroup>
          <Button title="Editar" variant='secondary' type='submit' />
        </Form>
      </Wrapper>

      




      <Wrapper>
        <TitleText>Editar Evento</TitleText>
        <Form onSubmit={handleSubmit2}>
          <FormGroup>
            <Label htmlFor="title">Titulo:</Label>
            <Input
              type="text"
              id="title"
              name="title"
              value={formData2.title}
              onChange={handleChange2}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Descrição:</Label>
            <Input
              type="text"
              id="description"
              name="description"
              value={formData2.description}
              onChange={handleChange2}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="deadLineDate">Data do Evento:</Label>
            <Input
              type="date"
              id="date"
              name="deadLineDate"
              value={formData2.deadLineDate}
              onChange={handleChange2}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="deadLineTime">Hora do Evento:</Label>
            <Input
              type="time"
              id="time"
              name="deadLineTime"
              value={formData2.deadLineTime}
              onChange={handleChange2}
              step="1"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Mensagem:</Label>
            <Textarea
              id="message"
              name="message"
              value={formData2.message}
              onChange={handleChange2}
            ></Textarea>
          </FormGroup>
          <Button title="Editar" variant='secondary' type='submit' />
        </Form>
      </Wrapper>
      <Footer />
    </Main>
  );
}

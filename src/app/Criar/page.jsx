"use client"
import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  TitleText,
  Main
} from './styles';
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "../page.module.css";
import { Wrapper } from './styles';

import { format } from 'date-fns';

export default function Criar() {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    message: '',
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

    // Obtém a data e hora formatadas
    const  formattedTime= new Date().toLocaleTimeString('pt-BR');
    const  formattedDateTime= new Date().toLocaleDateString('pt-BR');
    const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];

    const verify = () => {
      if (storedList.length > 0) {
        return storedList[storedList.length - 1].id + 1;
      } else {
        return 1;
      }
    }

    // Atualiza o estado `formData` com a data formatada
    const updatedFormData = {
      ...formData,
      date: formattedDateTime,
      time: formattedTime,
      id: verify(),
      type: 'nota',
      deadLineDate: null,
      deadLineTime: null,
      status:null,
    };

    // Salva os dados no localStorage
    const updatedList = [...storedList, updatedFormData];
    localStorage.setItem('formDataList', JSON.stringify(updatedList));

    // Reinicia o estado `formData` após o envio do formulário
    setFormData({
    id: '',
    title: '',
    description: '',
    message: '',
    date: '',
    type: '',
    deadLineDate: '',
    deadLineTime: '',
    status: '',
    });

    console.log(updatedList);
    console.log(formattedDateTime);
  };

  const reset = () => {
    localStorage.clear();
  }

  // ---------------------------------------------------------------------------------------------

  const [formData2, setFormData2] = useState({
    id: '',
    title: '',
    description: '',
    message: '',
    date: '',
    type: '',
    deadLineDate: '',
    deadLineTime: '',
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

    // Obtém a data e hora formatadas
    const  formattedTime2= new Date().toLocaleTimeString('pt-BR');
    const  formattedDateTime2= new Date().toLocaleDateString('pt-BR');
    const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];

    const verify2 = () => {
      if (storedList.length > 0) {
        return storedList[storedList.length - 1].id + 1;
      } else {
        return 1;
      }
    }

    // Atualiza o estado `formData2` com a data formatada
    const updatedFormData2 = {
      ...formData2,
      date: formattedDateTime2,
      time: formattedTime2,
      id: verify2(),
      type: 'compromisso',
      status: "InTime",
      deadLineDate: format(new Date(formData2.deadLineDate), 'dd/MM/yyyy'),
      
    };

    // Salva os dados no localStorage
    const updatedList2 = [...storedList, updatedFormData2];
    localStorage.setItem('formDataList', JSON.stringify(updatedList2));

    // Reinicia o estado `formData2` após o envio do formulário
    setFormData2({
    id: '',
    title: '',
    description: '',
    message: '',
    date: '',
    type: '',
    deadLineDate: '',
    deadLineTime: '',
    status: '',
    });

    console.log(updatedList2);
    console.log(formattedDateTime2);
  };

  return (
    <Main>
      <Header />
      <Wrapper>
        <TitleText>Criar nota</TitleText>
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
          <Button title="Criar" variant='secondary' type='submit' />
        </Form>
      </Wrapper>
      {/* //---------------------------------------------------------------------------------------------------------- */}
      <Wrapper>
        <TitleText>Criar Compromisso</TitleText>
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
            <Label htmlFor="deadLineDate">Data do Compromisso:</Label>
            <Input
              type="date"
              id="date"
              name="deadLineDate"
              value={formData2.deadLineDate}
              onChange={handleChange2}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="deadLineTime">Hora do Compromisso:</Label>
            <Input
              type="time"
              id="time"
              name="deadLineTime"
              value={formData2.deadLineTime}
              onChange={handleChange2}
              step="1" // Permite precisão de segundos
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
          <Button title="Criar" variant='secondary' type='submit' />
        </Form>
      </Wrapper>
      <Button title="Resetar" variant='secondary' onClick={reset} />
      <Footer />
    </Main>
  );
}

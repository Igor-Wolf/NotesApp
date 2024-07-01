"use client"
import Image from "next/image";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Main,
  Spacing,
  BodyContent,
  Input,
  TitleCard
} from "./styles";
import { MobileHeader } from "@/components/MobileHeader";
import { CardsContainerCompRed } from "@/components/CardsContainerCompRed";
import { CardsContainerComp } from "@/components/CardsContainerComp";
import { CardsContainer } from "@/components/CardsContainer";
import { CardsContainerNotas } from "@/components/CardsContainerNotas";
import React, { useState } from 'react';

export default function Notas() {
  // Estado para armazenar o valor do input
  const [inputValue, setInputValue] = useState('');
  // Estado para armazenar a variável texto
  const [texto, setTexto] = useState('');

  // Função para lidar com a mudança no input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Função para lidar com o clique no botão
  const handleButtonClick = () => {
    setTexto(inputValue);
  };

  console.log(texto);

  return (
    <Main>
      <Header></Header>
      <MobileHeader></MobileHeader>
      <BodyContent>
        <Spacing></Spacing>
        <TitleCard>NOTAS</TitleCard>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Titulo"
        ></Input>
        <Button title="Buscar" variant='secondary' onClick={handleButtonClick} />
        <CardsContainerNotas busca={texto}></CardsContainerNotas>
      </BodyContent>
      <Footer></Footer>
    </Main>
  );
}

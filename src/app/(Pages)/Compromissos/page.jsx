"use client"
import Image from "next/image";

import { Button } from "@/components/Button";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer";
import {
  Main,
  Spacing,
  BodyContent
 } from "./styles";
import { MobileHeader } from "@/components/MobileHeader";
import { CardsContainerEvent } from "@/components/CardsContainerEvent";



const alerta = () => {

  alert("Funcionou")
}


export default function Compromissos() {
  return (
    <Main>

      <Header>

      </Header>
      <MobileHeader></MobileHeader>
      <BodyContent>
        <Spacing></Spacing>
        <CardsContainerEvent></CardsContainerEvent>
      
      
        
      
      


      </BodyContent>
      <Footer></Footer>
    </Main>
  );
}
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
import { CardsContainerCompRed } from "@/components/CardsContainerCompRed";
import { CardsContainerComp } from "@/components/CardsContainerComp";
import { CardsContainer } from "@/components/CardsContainer";
import {CardsContainerNotas} from "@/components/CardsContainerNotas"







const alerta = () => {

  alert("Funcionou")
}


export default function Notas() {
  return (
    <Main>
      <Header>

      </Header>
      <MobileHeader></MobileHeader>
      <BodyContent>
        <Spacing></Spacing>
        <CardsContainerNotas></CardsContainerNotas>
      
      
        
      
      


      </BodyContent>
      <Footer></Footer>

      
    </Main>
  );
}
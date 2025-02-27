"use client"
import Image from "next/image";

import { Button } from "@/components/Button";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer";
import { Main } from "./styles";
import { MobileHeader } from "@/components/MobileHeader";
import { Spacing } from "@/app/styles";



const alerta = () => {

  alert("Funcionou")
}


export default function Compromissos() {
  const reset = () => {
    localStorage.clear();
  }
  return (
    <Main>

      <Header>

      </Header>
      <MobileHeader></MobileHeader>
      <Spacing></Spacing>
      
      
      <Button title="Resetar" variant='secondary' onClick={reset} />
      
      <Footer></Footer>
    </Main>
  );
}
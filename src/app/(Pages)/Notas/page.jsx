"use client"
import Image from "next/image";


import { Button } from "@/components/Button";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer";
import { Main } from "./styles";
import { MobileHeader } from "@/components/MobileHeader";







const alerta = () => {

  alert("Funcionou")
}


export default function Notas() {
  return (
    <Main>

      <Header>

      </Header>
      <MobileHeader></MobileHeader>
      
      <p>notas</p>
      
      
      <Footer></Footer>
    </Main>
  );
}
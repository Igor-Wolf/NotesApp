"use client"
import Image from "next/image";

import styles from "../page.module.css";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer";
import { Main } from "./styles";







const alerta = () => {

  alert("Funcionou")
}


export default function Notas() {
  return (
    <Main>

      <Header>

      </Header>
      
      <p>notas</p>
      
      
      <Footer></Footer>
    </Main>
  );
}
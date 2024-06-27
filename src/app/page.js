"use client"
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/Button";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer";
import { Cards } from "@/components/Cards";
import { CardsContainer } from "@/components/CardsContainer";
import { Main } from "@/app/styles"
import { CardsContainerComp } from "@/components/CardsContainerComp";
import { CardsContainerCompRed } from "@/components/CardsContainerCompRed";



export default function Home() {

  return (
    <Main>

      <Header>

      </Header>
      
      <CardsContainerCompRed>        
      </CardsContainerCompRed>
      <CardsContainer>
      </CardsContainer>

      <CardsContainerComp>
        
      </CardsContainerComp>
      
      
      
      
      <Footer></Footer>
    </Main>
  );
}

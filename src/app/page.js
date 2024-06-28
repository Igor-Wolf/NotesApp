"use client"
import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer";
import { CardsContainer } from "@/components/CardsContainer";
import { BodyContent, Main } from "@/app/styles"
import { CardsContainerComp } from "@/components/CardsContainerComp";
import { CardsContainerCompRed } from "@/components/CardsContainerCompRed";
import {MobileHeader} from '@/components/MobileHeader'


export default function Home() {

  return (
    <Main>
      <Header>

</Header>
<MobileHeader></MobileHeader>
      <BodyContent>

      
      
      <CardsContainerCompRed>        
      </CardsContainerCompRed>
      <CardsContainer>
      </CardsContainer>

      <CardsContainerComp>
        
      </CardsContainerComp>    
      
      


      </BodyContent>
      <Footer></Footer>

      
    </Main>
  );
}

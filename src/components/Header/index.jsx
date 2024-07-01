import Link from 'next/link'
import React from 'react'
import {
  Container,
  TitlePage,
  Row,
  MenuRight,
  External
} from './styles'
import {Divisor} from '@/components/Divisor'

const Header = () => {
  return (
    <External>
    <Container>
      
      <ul>
        <Link href={"/"}>
        <TitlePage>
          NOTAS
        </TitlePage> 
        
        </Link>
        
      </ul>           
        <MenuRight>

          <li>
            <Link href={"/"}>
              <Row>Inicio</Row>
            </Link>
          </li>
          <li>
            <Link  href={"/Criar"}>
            <Row>Criar</Row>
            </Link>
          </li>
          <li>
            <Link  href={"/Notas"}>            
            <Row>Notas</Row>
            </Link>
          </li>
          <li>
            <Link  href={"/Compromissos"}>
            <Row>Event</Row>
            </Link>
          </li>
          <li>
            <Link  href={"/Config"}>
            <Row>Config</Row>
            </Link>
          </li>
      </MenuRight>    
      
    </Container>
      <Divisor></Divisor>
    </External>  

  )
}

export { Header }

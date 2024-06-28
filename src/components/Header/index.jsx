import Link from 'next/link'
import React from 'react'
import {
  Container,
  TitlePage,
  Row,
  MenuRight
} from './styles'
import {Divisor} from '@/components/Divisor'

const Header = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', width: "100%"}}>
    <Container>
      
      <ul>
        <Link href={"/"}>
        <TitlePage>
          NOTES
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
      </div>  

  )
}

export { Header }

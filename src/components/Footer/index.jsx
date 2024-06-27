import React from 'react'
import {TextContent, Wrapper, TextLink, TextContentExternal} from './styles'
import { Divisor } from '../Divisor'
import Link from 'next/link'


const Footer = () => {
  return (
    <Wrapper>
          <Divisor></Divisor> 
        <TextContentExternal>
              
                <TextContent>
                  <p>© 2024. Todos os Direitos Reservados à Igor Barbosa. Desenvolvido por
                                 
                  <a href="https://github.com/Igor-Wolf" style={{fontWeight: 600, color: 'white'} }> IB </a></p>
                </TextContent>
              


        </TextContentExternal>
        
    </Wrapper>
  )
}

export {Footer}

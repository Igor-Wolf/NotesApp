import React from 'react'
import { Container, MenuItem, Icon, TextMenu} from './styles'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

const  MobileHeader = () => {
  return (
      <Container>
          <Link href={'/'}>
          <MenuItem>
              
              <Icon>
                  
              <i className='bi bi-house-door'></i>

              </Icon>
              
             
              <TextMenu>INICIO</TextMenu>
              
              
              
              
          </MenuItem> 
          </Link>

          <Link href={'/Criar'}>
          <MenuItem>
              
              <Icon>
                  
              <i class="bi bi-pencil-square"></i>

              </Icon>
              
             
              <TextMenu>CRIAR</TextMenu>
              
              
              
              
          </MenuItem> 
          </Link>

          <Link href={'/Notas'}>
          <MenuItem>
              
              <Icon>
                  
              <i class="bi bi-journal"></i>

              </Icon>
              
             
              <TextMenu>NOTAS</TextMenu>
              
              
              
              
          </MenuItem> 
          </Link>

          <Link href={'/Compromissos'}>
          <MenuItem>
              
              <Icon>
                  
              <i class="bi bi-calendar-event"></i>

              </Icon>
              
             
              <TextMenu>EVENT</TextMenu>
              
              
              
              
          </MenuItem> 
          </Link>
          <Link href={'/Config'}>
          <MenuItem>
              
              <Icon>
                  
              <i class="bi bi-gear"></i>

              </Icon>
              
             
              <TextMenu>CONFIG</TextMenu>
              
              
              
              
          </MenuItem> 
          </Link>
          
          
    </Container>
  )
}

export {MobileHeader}
import styled, { css } from 'styled-components';

export const TextContent = styled.div`
    
    align-items: center;
    justify-content:center;
    text-align: center;    
    margin: 1rem 0.5rem;
    display:flex;
    flex-direction: row;
    gap: 0.5rem; 
    color: white;

    @media (max-width: 768px) {

        color: black;
    }
    
`

export const TextContentExternal = styled.div`

    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`

    width:100%;
    

    @media (max-width: 768px) {
    padding-bottom: 80px;
    background-color: #FF9900;
    


  }

`

export const TextLink = styled.p`

    font-weight: 600;
    


    &:hover{

         color: #9a9a9c
    }


`


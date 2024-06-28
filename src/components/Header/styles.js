import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;  
    background-color: #141414;
    padding: 10px 30px; 
    z-index: 5000;
    position: fixed;

    @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  } 
`

export const TitlePage = styled.div`

    font-size: 2.5rem;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    color: #FF9900

`

export const MenuRight = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

     @media (max-width: 768px) {
    display:none;
  } 


`

export const Row = styled.div`

    color: white;
    font-size: 1.05rem;

    &:hover {

        color: #9a9a9c
    }

`


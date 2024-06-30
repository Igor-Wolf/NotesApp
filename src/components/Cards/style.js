import styled, { css } from 'styled-components';



export const WrapperCard = styled.div`

    background-color: white;
    width: 300px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: black;
    border-radius: 1rem;
    padding: 0.5rem;
    gap: 0.5rem;

    @media (max-width: 768px) {
    
    width: 270px;

    margin: 0 -20px

    
    
    }



`


export const TitleCard = styled.p`
    background-color: white;
    font-size: 1.2rem;
    font-weight: 500;
    color: black;

`

export const DescriptionCard = styled.p`
    background-color: white;
    font-size: 1.2rem;
    font-weight: 500;
    color: black;

`

export const DateCard = styled.p`
    background-color: white;
    font-size: 1.2rem;
    font-weight: 500;
    color: black;

`
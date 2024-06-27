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

export const InfoCard = styled.div` 

    display:flex;
    flex-direction: column;



`

export const StatusCard = styled.div`

    
    background-color: ${props => props.bgColor};
    width: 35px;
    height: 35px;
    border-radius: 2rem;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    margin-top: 0.5rem;

`

export const RowInfo = styled.div`

    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width:100%;
    padding-top: 0.5rem;



`
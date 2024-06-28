import styled from 'styled-components';


export const Main = styled.div`




    background-color: #141414;
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;


`

export const BoxMessage = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    
    width: 70vw;
    padding: 1rem;

    @media (max-width: 768px) {
    width: 100vw;
  }


`



export const TitleMessage = styled.p`

    font-size: 2rem;
    text-align: center;
    font-weight: 600;
    padding: 1rem;



`

export const DescriptionMessage = styled.p`

    font-size: 1.5rem;
    text-align: justify;
    padding: .5rem;


`

export const MessageContent = styled.p`

    font-size: 1.5rem;
    padding: .5rem;



`

export const DateEvent = styled.p`

font-size: 1.5rem;
padding: .5rem;

`

export const TimeEvent = styled.p`

font-size: 1.5rem;
padding: .5rem;

`

export const DateCreate = styled.p`

font-size: 1.5rem;
padding: .5rem;

`

export const TimeCreate = styled.p`

font-size: 1.5rem;
padding: .5rem;

`

export const RowDate = styled.div`

    display:flex;
    flex-direction: row;
    flex-wrap: wrap;

`
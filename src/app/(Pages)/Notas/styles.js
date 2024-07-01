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

export const BodyContent = styled.div`

  background-color: #141414;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  
  margin-top: 0px;  
  margin: 0px;
  padding: 0px;
  width: 100vw;
  flex:1;
  @media (max-width: 768px) {
    margin-top: 0;
  }

`


export const Spacing = styled.div`

    height:60px;

    
`

export const Input = styled.input`
  width: 60%;
  padding: 8px;
  box-sizing: border-box; 

  border-radius:1rem;
  border: 3px solid gray;

  background-color: white;
  color: black;
  @media (max-width: 768px) {
    width: 85%;
    margin-bottom: 0.6rem;
  }

`;

export const TitleCard = styled.p`

    font-size: 1.2rem;
    font-weight: 600;
    color:white;
    text-align: center;
    margin-bottom:1rem;
    margin-top: 1rem;



`
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


export const Wrapper = styled.div`

  width:100%;
  height:auto;
  min-height:80%;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-bottom: 1rem;

`

export const TitleText = styled.div`

  font-size: 2rem;
  font-weight: 600;
  background-color: white;
  color: black;

`

export const Form = styled.form`
  margin-top: 20px;
  background-color: white;
  width: 90vw;
  max-width: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius:1rem;
  
  
  
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
  background-color: gray;
  border: 1px solid black;
  width: 90vw;
  max-width: 1000px;
  border-radius:1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  background-color: transparent;

  border-radius:1rem;
  padding: 0.5rem;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box; 

  border-radius:1rem;

  background-color: #141414;
  color: white;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 500px;
  padding: 8px;
  box-sizing: border-box;

  border-radius:1rem;
  background-color: #141414;
  color: white;
`;


export const BodyContent = styled.div`

  background-color: #141414;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  margin-top: 60px;  
  margin: 0px;
  padding: 0px;
  

`

export const Spacing = styled.div`

    height:60px;

    
`
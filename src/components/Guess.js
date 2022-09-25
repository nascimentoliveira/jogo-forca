import styled from "styled-components";

export default function Guess() {
  // === LOGIC ===

  // === UI ===
  return (
    <GuessDisplay>
      <h1>Já sei a palavra!</h1>
      <input></input>
      <button>CHUTAR</button>
    </GuessDisplay>
  );
}

const GuessDisplay = styled.section`
  font-family: 'Ubuntu', sans-serif;
  width: 100%;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    color: #3978A6;
    font-size: 20px;
    text-align: center;
    margin: 5px 0px;
  }

  input {
    font-family: 'Ubuntu', sans-serif;
    width: 20%;
    min-width: 150px;
    height: 22px;
    margin: 5px 10px;
    font-size: 17px;
    line-height: 25px;
    border: 2px solid #3978A6;
    border-radius: 10px;
  }

  button {
    font-family: 'Ubuntu', sans-serif;
    min-width: 80px;
    width: 150px;
    margin: 5px 0px;
    font-size: 17px;
    line-height: 25px;
    color: #3978A6;
    background-color: #E1ECF4;
    border: 2px solid #3978A6;
    border-radius: 10px;
    transition-duration: 0.4s;
    &:hover {
      color: #FFFFFF;
      background-color: #3978A6;
    }
  }
`;


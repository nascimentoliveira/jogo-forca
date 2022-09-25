import styled from "styled-components";
import gallow0 from "../assets/images/forca0.png";
import gallow1 from "../assets/images/forca1.png";
import gallow2 from "../assets/images/forca2.png";
import gallow3 from "../assets/images/forca3.png";
import gallow4 from "../assets/images/forca4.png";
import gallow5 from "../assets/images/forca5.png";
import gallow6 from "../assets/images/forca6.png";

const images = [gallow0, gallow1, gallow2, gallow3, gallow4, gallow5, gallow6];

export default function Game() {
  // === LOGIC ===

  // === UI ===
  return (
    <GameDisplay>
      <Scoreboard>
        <img src={gallow6} />
      </Scoreboard>
      <WordDisplay>
        <button>SORTEAR NOVA PALAVRA</button>
        <ul>
          <Letter>_</Letter>
          <Letter>_</Letter>
          <Letter>_</Letter>
          <Letter>_</Letter>
          <Letter>_</Letter>
          <Letter>_</Letter>
          <Letter>_</Letter>
          <Letter>_</Letter>
        </ul>
      </WordDisplay>
    </GameDisplay>
  );
}

const GameDisplay = styled.section`
  width: 100%;
  margin: 20px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Scoreboard = styled.figure`
  width: auto;
  min-width: 200px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    width: 100%;
    max-width: 300px;
  }
`;

const WordDisplay = styled.section`
  width: auto;
  min-width: 200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  button {
    font-family: 'Ubuntu', sans-serif;
    min-width: 100px;
    width: 40%;
    min-height: 45px;
    margin: 20px auto;
    font-size: 17px;
    line-height: 25px;
    color: #27AE60;
    background-color: #AAFFCC;
    border: 2px solid #27AE60;
    border-radius: 10px;
    transition-duration: 0.4s;
    &:hover {
      color: white;
      background-color: #27AE60;
    }
  }

  ul {
    width: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Letter = styled.li`
  font-family: 'Ubuntu', sans-serif;
  width: 40px;
  height: 40px;
  margin: 5px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: #80848A; 
  background-color: #9FAAB5; //#E1ECF4
  border-radius: 5px;
`;
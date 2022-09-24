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
        <img src={gallow6}/>
      </Scoreboard>
      <WordDisplay>
        <button>SORTEAR NOVA PALAVRA</button>
        <Match>
          <Letter>_</Letter>
          <Letter>_</Letter>
          <Letter>_</Letter>
          <Letter>_</Letter>
          <Letter>_</Letter>
          <Letter>_</Letter>
        </Match>
      </WordDisplay>
    </GameDisplay>
  );
}

const GameDisplay = styled.figure`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Scoreboard = styled.figure`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 300px;
    width: 100%;
    height: auto;
  }
`;

const WordDisplay = styled.section`
  max-width: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  button {
    background-color: #27AE60;
    color: #FFFFFF;
    max-width: 150px;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: none;
    outline: none;
  }
`;

const Match = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Letter = styled.div`
  margin: 0px 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
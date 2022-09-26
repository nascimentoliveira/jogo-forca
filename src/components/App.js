import styled from "styled-components";
import React from "react";
import words from "./words";
import Game from "./Game";
import Letters from "./Letters";
import Guess from "./Guess";
import GlobalStyle from "../assets/theme/globalStyles";

export default function App() {
  // === LOGIC ===
  const currentWord = React.useState([[], []]);
  const clickedLetters = React.useState([]);
  const guessedLetters = React.useState([]);
  const gameState = React.useState("start")
  const hits = React.useState(0);

  // === UI ===
  return (
    <>
      <GlobalStyle />
      <Main>
        <Game
          words={words}
          currentWord={currentWord}
          clickedLetters={clickedLetters}
          guessedLetters={guessedLetters}
          gameState={gameState}
          hits={hits}
        />
        <Letters
          currentWord={currentWord}
          clickedLetters={clickedLetters}
          guessedLetters={guessedLetters}
          gameState={gameState}
          hits={hits}
        />
        <Guess
          currentWord={currentWord}
          clickedLetters={clickedLetters}
          guessedLetters={guessedLetters}
          gameState={gameState}
          hits={hits}
        />
      </Main>
    </>
  );
}

const Main = styled.main`
  height: 100vh;
  background-color: #EFEFEF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
import styled from "styled-components";
import Game from "./Game";
import Letters from "./Letters";
import Guess from "./Guess";
import GlobalStyle from "../assets/theme/globalStyles";

export default function App() {
  // === LOGIC ===

  // === UI ===
  return (
    <>
      <GlobalStyle />
      <Main>
        <Game />
        <Letters />
        <Guess />
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
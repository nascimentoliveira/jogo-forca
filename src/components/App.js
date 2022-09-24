import styled from "styled-components";
import Game from "./Game"
import Letters from "./Letters"
import Guess from "./Guess"
import GlobalStyle from "../assets/theme/globalStyles"

export default function App() {
  // === LOGIC ===

  // === UI ===
  return (
    <>
      <GlobalStyle />
      <Main>
        <Content>
          <Game />
          <Letters />
          <Guess />
        </Content>
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 5%;
  position:absolute; 
  top:0; 
  bottom:0; 
  right:0; 
  left:0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EFEFEF;
`;

const Content = styled.article`
	height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
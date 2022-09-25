import styled from "styled-components";

export default function Letters() {
  // === LOGIC ===
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
                    "j", "k", "l", "m", "n", "o", "p", "q", "r", 
                    "s", "t", "u", "v", "w", "x", "y", "z"];

  // === UI ===
  return (
    <Keyboard>
      {alphabet.map((letter) => (
        <Letter>{letter.toUpperCase()}</Letter>
      ))}
    </Keyboard>
  );
}

const Keyboard = styled.div`
  height: 20%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Letter = styled.div`
  margin: 5px;
  width: 40px;
  height: 40px;
  text-align: center;
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  font-size: 20px;
  line-height: 40px;
`;
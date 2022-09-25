import styled from "styled-components";

export default function Letters() {
  // === LOGIC ===
  const alphabet = [
    "a", "b", "c", "d", "e", "f", "g", 
    "h", "i", "j", "k", "l", "m", "n", 
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
  ];

  // === UI ===
  return (
    <Keyboard>
      <ul>
        {alphabet.map((letter, index) => (
          <Letter key={index}>{letter.toUpperCase()}</Letter>
        ))}
      </ul>
    </Keyboard>
  );
}

const Keyboard = styled.section`
  font-family: 'Ubuntu', sans-serif;
  max-width: 650px;
  width: 90%;
  margin: 20px 0px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const Letter = styled.li`
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
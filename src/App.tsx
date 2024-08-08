import { useState } from "react";
import tw, { styled } from "twin.macro";

import Container from "./Common/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <h1>Hello and welcome to my portfolio!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Title>Click on the Vite and React logos to learn more</Title>
    </Container>
  );
}

export default App;

const Title = styled.div`
  ${tw`flex justify-center items-center bg-red-500`}
`;

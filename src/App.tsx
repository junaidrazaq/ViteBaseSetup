import { useState } from "react";
import tw, { styled } from "twin.macro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Title>Click on the Vite and React logos to learn more</Title>
    </>
  );
}

export default App;

const Title = styled.div`
  ${tw`flex justify-center items-center bg-red-500`}
`;

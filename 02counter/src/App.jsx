import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);
  // let counter = 15;

  const addValue = () => {
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 3);
  };

  const removeValue = () => {
    // setCounter(counter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>React Course With Faisal Iqbal {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;

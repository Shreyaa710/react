import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // hooks : this will help in pdating value in UI
  let [counter, setCounter] = useState(15);

  // let counter = 5;

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1;
    if (counter == 20) setCounter(20);
    else setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter == 0) setCounter(0);
    else setCounter(counter - 1);
  };

  return (
    <>
      <h1> chai or counter</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}> Add Value {counter} </button>
      <br />
      <button onClick={removeValue}> Remove Value {counter} </button>
    </>
  );
}

export default App;

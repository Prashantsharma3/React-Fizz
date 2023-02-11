import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const fizzBuzz = (counter) => {
    if (counter % 3 === 0 && counter % 5 === 0) {
      return "fizzbuzz";
    } else if (counter % 3 === 0) {
      return "fizz";
    } else if (counter % 5 === 0) {
      return "buzz";
    } else {
      return "normal";
    }
  };

  return (
    <div className="App">
      <div id="counter" className={fizzBuzz(counter)}>
        {counter}
      </div>
      <button id="increment" onClick={incrementCounter}>
        Increment
      </button>
      <button id="decrement" onClick={decrementCounter}>
        Decrement
      </button>
    </div>
  );
}

export default App;

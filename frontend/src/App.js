import React, { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [answer, setAnswer] = useState("");

  const requestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      num1: firstNumber || 0,
      num2: secondNumber || 0,
    }),
  };

  const handleAdd = async () => {
    const response = await fetch(`http://localhost:5000/add`, requestInit);

    const data = await response.json();
    setAnswer(data.result);
  };

  const handleSubtract = async () => {
    const response = await fetch(`http://localhost:5000/subtract`, requestInit);

    const data = await response.json();
    setAnswer(data.result);
  };

  return (
    <div>
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
      />
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      <br />
      <button onClick={() => handleAdd()}>Add</button>
      <button onClick={() => handleSubtract()}>Subtract</button>
      <h3>Answer : {answer}</h3>
    </div>
  );
}

export default App;

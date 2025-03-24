import React, { useState } from "react";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [alphabetCount, setAlphabetCount] = useState(0);
  const [submittedData, setSubmittedData] = useState("");

  const handleButtonClick = () => {
    setSubmittedData(inputData);

    const count = (inputData.match(/a/g) || []).length;
    setAlphabetCount(count);
  };

  return (
    <div>
      <h1>React Task</h1>
      <h1>Click Submit</h1>

      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Type something"
      />
      <button onClick={handleButtonClick}>Submit</button>
      <div>
        <h2> Data:</h2>
        <p>{submittedData}</p>
      </div>
      <div>
        <h3>Alphabet 'a' Count: {alphabetCount}</h3>
      </div>
    </div>
  );
};

export default App;

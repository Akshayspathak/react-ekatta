import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(10);

  return (
    <>
      <div>
        <h1>This is a count number of {count}</h1>
        <button
          className="bg-gray-400 text-orange-300 text-2xl p-3 m-4 rounded-xl"
          onClick={() => setCount(count + 1)}
        >
          Click-me
        </button>

        <button>Click-me</button>
      </div>
    </>
  );
}

export default App;

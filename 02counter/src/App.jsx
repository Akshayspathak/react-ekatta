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
          Add-Value
        </button>

        <button
          className="bg-gray-400 text-orange-300 text-2xl p-3 m-4 rounded-xl"
          onClick={() => setCount(count - 1)}
        >
          Remove-Value
        </button>
      </div>
    </>
  );
}

export default App;

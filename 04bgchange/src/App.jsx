import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <>
      <h1
        className="bg-sky-300 text-3xl text-center p-4 m-6"
        style={{ backgroundColor: color }}
      >
        This is the React Project
      </h1>

      <div
        className="w-full h-screen duration-200 mt-4"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2 mt-4">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mt-4">
            <button
              className="outline-none px-4 py-1 rounded-full"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full"
              style={{ backgroundColor: "orange" }}
              onClick={() => setColor("orange")}
            >
              orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

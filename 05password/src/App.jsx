import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();
  return (
    <>
      <h1 className="text-4xl m-4 text-center">New Project</h1>
      <h1 className="text-4xl text-center">Password Generator</h1>
      <h1 className=" text-2x] text-sky-300 text-center">
        create the Password Generators
      </h1>
    </>
  );
}

export default App;

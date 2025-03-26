import "./App.css";
import Card from "./Component/Card";

function App() {
  // let myObj = {
  //   username: "Aksim",
  //   age: 20,
  // };
  // let myArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-sky-500 text-black p-4 rounded-xl mb-4">
        Taliwind Test
      </h1>
      <Card username="Aku" btnText="Info. Click-me"></Card>
      <Card username="Sim" btnText="Info. Visit-me"></Card>
    </>
  );
}

export default App;

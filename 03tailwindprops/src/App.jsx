import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  let myObj = {
    name: "Faisal",
    age: 22,
    address: {
      city: "Karak",
      state: "Khyber Pakhtunkhwa",
      country: "Pakistan",
    },
  };

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <br />
      <Card username="Faisal Iqbal" post="Senior Software-Engine" />
      <br />
      <Card username={myObj.name} post={[newArr]} />
    </>
  );
}

export default App;

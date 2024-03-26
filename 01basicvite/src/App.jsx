import Youtube from "./Youtube";

function App() {
  const username = "faisal iqbal";
  return (
    <>
      <h1>Hey! This is {username}</h1>
      <h1>
        Vite react app{" "}
        {username === "faisal iqbal" ? `yes ${username}` : `No ${username}`}
      </h1>
      <Youtube />
    </>
  );
}

export default App;

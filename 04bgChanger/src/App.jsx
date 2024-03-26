import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  // function changeColor(color) {
  //   setColor(color);
  // }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-slate-400 p-4 rounded w-full max-w-2xl">
          {/* This is red button */}
          <button
            // onClick={() => changeColor("red")}
            onClick={() => setColor("red")}
            className="bg-red-700 hover:bg-red-500 text-white font-semibold py-2 px-4 border rounded"
          >
            red
          </button>
          {/* This is green button */}
          <button
            // onClick={() => changeColor("green")}
            onClick={() => setColor("green")}
            className="bg-green-700 hover:bg-green-500 text-white font-semibold py-2 px-4 mx-3 border rounded"
          >
            green
          </button>
          {/* This is yellow button */}
          <button
            // onClick={() => changeColor("yellow")}
            onClick={() => setColor("yellow")}
            className="bg-yellow-700 hover:bg-yellow-500 text-white font-semibold py-2 px-4 border rounded"
          >
            yellow
          </button>
          {/* This is pink button */}
          <button
            // onClick={() => changeColor("yellow")}
            onClick={() => setColor("pink")}
            className="bg-pink-700 hover:bg-pink-500 text-white font-semibold py-2 px-4 mx-3 border rounded"
          >
            pink
          </button>
          {/* This is yellow button */}
          <button
            // onClick={() => changeColor("yellow")}
            onClick={() => setColor("blue")}
            className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 border rounded"
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

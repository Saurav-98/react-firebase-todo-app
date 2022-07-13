import "./App.css";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Take Dogs for a walk",
    "Clean the floor",
    "bake the cookies",
    "I need to take a shower",
  ]);

  const [input, setinput] = useState("");
  const inputChangeHander = (event) => {
    setinput(event.target.value);
  };

  return (
    <div className="App">
      <h1>Hello Saurav</h1>
      <input value={input} onChange={inputChangeHander} type="text" />
      <button>Add ToDo</button>
      <ul>
        {todos.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

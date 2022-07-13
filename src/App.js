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

  const addTodo = (event) => {
    event.preventDefault();
    console.log("I'm Working 👽");
    setTodos([...todos, input]);
    setinput("");
  };

  return (
    <div className="App">
      <h1>Hello Saurav</h1>
      <form>
        <input value={input} onChange={inputChangeHander} type="text" />
        <button onClick={addTodo}>Add ToDo</button>
      </form>
      <ul>
        {todos.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import firebase from "firebase/compat/app";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setinput] = useState("");
  // When App Loads we need to listen to th databse and fetch new todos as they get added /removed

  useEffect(() => {
    db.collection("tasks").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().task));
    });
  }, []);

  const inputChangeHander = (event) => {
    setinput(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();

    db.collection("tasks").add({
      task: input,

      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    setinput("");
  };

  return (
    <div className="App">
      <h1>Hello Saurav</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">✅ Todos Here: </InputLabel>
          <Input
            value={input}
            onChange={inputChangeHander}
            type="text"
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>

        <Button
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          color="secondary"
        >
          Add ToDo
        </Button>
      </form>
      <ul>
        {todos.map((item) => (
          <Todo item={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;

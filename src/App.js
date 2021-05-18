import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./header";
import db from "./firebase";
import firebase from "firebase";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when the apps load, we need to listen to the database and fetch new todos as they get added/removed

  useEffect(() => {
    //this code here... fires when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); // will stop refresh

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(""); // clear up input after clicking add todo button
  };
  return (
    <div className="App">
      <Header />
      <div className="todolist">
        <div className="heading">
          <h1 className="title">React JS To-Do List</h1>
        </div>
<form>
        <FormControl>
          <InputLabel>
            <b>Write a Todo</b>
          </InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <Button
            className="buttonn"
            disabled={!input}
            type="submit"
            variant="contained"
            color="primary"
            onClick={addTodo}
          >
            Add
          </Button>
        </FormControl>
        </form>
        <div className="items">
          
            {todos.map((todo) => (
              <Todo todo={todo} />
            ))}
            
        
        </div>
      </div>
    </div>
  );
}

export default App;

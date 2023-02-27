import './App.css';
import Header from "./MyCompo/Header.jsx";
import { Footer } from "./MyCompo/Footer.jsx";
import { Todos } from "./MyCompo/Todos.js";
import React, { useState } from 'react';
import AddTodo from './MyCompo/AddTodo';
function App() {
  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    // Deleting this way in react does not works
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }
  const addTodo = (title, desc) =>{
    console.log("I am adding this todo", title, desc)
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go the market get this job done"
    }, {
      sno: 2,
      title: "Go to the Mall",
      desc: "You need to go the market get this job done"
    }, {
      sno: 3,
      title: "Go to the garden",
      desc: "You need to go the market get this job done"
    }
  ]);
  return (
    <>


        <Header searchBar={true} />
        <AddTodo AddTodo={AddTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
      
    </>
  );
}

export default App;

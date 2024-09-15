import React, { useState, useReducer } from "react";
import "./App.css";
import Todo from "./Todo";
import { ACTIONS } from "./Actions";

const reducer = (todos, action) => {
  console.log(todos,action)
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, {id: Math.floor(Math.random() * 1000), todoContent: action.payload.todoContent , complete: false}]
    case ACTIONS.COMPLETE:
      return todos.map(item => {
        if(item.id === action.payload.id){
          return {...item, complete: !item.complete}
        }
        return item
      })
    case ACTIONS.DELETE:
      return todos.filter(item => item.id !== action.payload.id)
    default:
      return todos
  }
}

function App() {
  const [todoContent, setTodoContent] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);  

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: ACTIONS.ADD, payload: {todoContent: todoContent}})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
          placeholder="Type in Something ..."
        />
      </form>

      {todos.map((item) => (
        <Todo key={item.id} todo={item} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default App;

import React, { useState, useReducer } from "react";
import "./App.css";

function App() {
  const [todoContent, setTodoContent] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
          placeholder="Type in Something ..."
        />
      </form>

    </div>
  );
}

export default App;

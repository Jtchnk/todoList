import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleOnChange = (e) => {
    e.preventDefault();
    if (!text || /^\s/.test(text)) {
      return;
    }
    setTodo([...todo, text]);
    setText("");

    setTimeout(() => {
      setTodo((todo) => todo.slice(1));
      console.log(todo);
    }, 5000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <form onSubmit={handleOnChange}>
        <input
          type="text"
          placeholder="Todo List"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Enter</button>

        {todo.map((value, i) => {
          return (
            <div key={i} style={{ fontSize: "20px" }}>
              {value}
            </div>
          );
        })}
      </form>
    </div>
  );
}

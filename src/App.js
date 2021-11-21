import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleOnChange = (e) => {
    e.preventDefault();
    if (!text || /^\s/.test(text)) {
      return;
    }
    setTodo([...todo, text]);
    setText("");
  };

  useEffect(() => {
    setTimeout(() => {
      if (todo.length > 0) {
        setTodo((todo) => todo.slice(1));
        console.log("todo", todo);
      }
    }, 5000);
    // return () => clearTimeout();
  }, [todo]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (todo && todo.length > 0) {
  //       setTodo((todo) => todo.slice(1));
  //       console.log("todo", todo);
  //     }
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [todo]);

  // console.log("todo", todo);
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

        {todo &&
          todo.map((value, i) => (
            <div key={i} style={{ fontSize: "20px" }}>
              {value}
            </div>
          ))}
      </form>
    </div>
  );
};

export default App;

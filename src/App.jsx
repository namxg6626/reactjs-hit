import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import "antd/dist/antd.css";
import "./style.css";

export default function App() {
  return (
    <div className="app">
      <Login />
    </div>
  );
}

/* 
  todo: {
    id,
    completed,
    title
  }

**/

// export default function App() {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");
//   const [errMessage, setErrMessage] = useState(() => "");

//   const addTodo = (title) => {
//     if (!title || title.length < 4) {
//       return setErrMessage("Nhap sai todo");
//     }

//     setTodos([
//       ...todos,
//       {
//         id: uuid(),
//         title,
//         completed: false,
//       },
//     ]);
//     setText("");
//   };

//   const deleteTodoById = (id) => {
//     const newTodos = todos.filter((todo) => todo.id !== id);
//     console.log(newTodos);
//     setTodos([...newTodos]);
//   };

//   useEffect(() => {
//     console.log(todos);
//   }, [todos]);

//   return (
//     <main className="app">
//       <input
//         placeholder="Bạn muốn làm gì tiếp theo?"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           addTodo(text);
//         }}
//       >
//         Thêm todo
//       </button>
//       <p style={{ color: "red" }}>{errMessage}</p>
//       <br />
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.title}
//             <button
//               onClick={() => deleteTodoById(todo.id)}
//               style={{ marginLeft: "10px" }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

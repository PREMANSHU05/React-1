import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  let [todos, settodos] = useState([
    { task: "sample task", id: uuidv4(), isdone: false },
  ]);
  let [newtodo, setnewtodo] = useState("");
  let addNewTask = () => {
    settodos((prevTodo) => {
      return [...prevTodo, { task: newtodo, id: uuidv4(), isdone: false }];
    });
    setnewtodo("");
  };
  let updateTodoValue = (event) => {
    setnewtodo(event.target.value);
  };
  let deletetodo = (id) => {
    console.log(id);
    settodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    console.log(copy);
  };
  let markalldone = () => {
    settodos((prevtodos) =>
      prevtodos.map((todo) => {
        return {
          ...todo,
          isdone: true,
        };
      }),
    );
  };
  let markasdone = (id) => {
    settodos((prevtodos) =>
      prevtodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isdone: true,
          };
        } else {
          return todo;
        }
      }),
    );
  };
  return (
    <div>
      <input
        placeholder="add a task"
        value={newtodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Task to do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isdone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deletetodo(todo.id)}>Delete</button>
            &nbsp;&nbsp;
            <button onClick={() => markasdone(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={markalldone}>Mark All Done</button>
    </div>
  );
}

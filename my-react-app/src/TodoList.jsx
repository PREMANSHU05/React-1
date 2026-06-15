import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  let [todos, settodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newtodo, setnewtodo] = useState("");
  let addNewTask = () => {
    settodos((prevTodo) => {
      return [...prevTodo, { task: newtodo, id: uuidv4() }];
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
  let Uppercaseall = () => {
    settodos((prevtodos) =>
      prevtodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      }),
    );
  };
  let uppercaseone = (id) => {
    settodos((prevtodos) =>
      prevtodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
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
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deletetodo(todo.id)}>Delete</button>
            &nbsp;&nbsp;
            <button onClick={() => uppercaseone(todo.id)}>UpperCase One</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={Uppercaseall}>UpperCase All</button>
    </div>
  );
}

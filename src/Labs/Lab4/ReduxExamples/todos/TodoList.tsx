import React, { useState } from "react";
export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node"  }]);
  const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
  const addTodo = (todo: any) => {
    {/* newTodos initializes with the current list, the mutator also ha that list, with id as the current date and time, and can set newTodos, our current set is defualcted to -1 and blank. */}
    const newTodos = [ ...todos, { ...todo,
      id: new Date().getTime().toString() }];
    setTodos(newTodos);
    setTodo({id: "-1", title: ""});
  };
  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const updateTodo = (todo: any) => {
    const newTodos = todos.map((item) =>
      (item.id === todo.id ? todo : item));
    setTodos(newTodos);
    setTodo({id: "-1", title: ""});
  };
  {/* Above can delete based off the string id, and update the list by replace an objectby their id. */}
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <button onClick={() => addTodo(todo)}
                  id="wd-add-todo-click">Add</button>
          <button onClick={() => updateTodo(todo)}
                  id="wd-update-todo-click">
            Update </button>
          <input defaultValue={todo.title}
            onChange={(e) =>
              setTodo({ ...todo,
                title: e.target.value })
            }
          />
        </li>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button onClick={() => deleteTodo(todo.id)}
                    id="wd-delete-todo-click">
              Delete </button>
            <button onClick={() => setTodo(todo)}
                    id="wd-set-todo-click">
              Edit </button>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}

// import useState

// create todos array state variable
// initialize with 2 todo objects

// create todo state variable object
// event handler to add new todo
// spread existing todos, append new todo,
// override id
// update todos
// clear the todo

// event handler to remove todo by their ID



// event handler to
// update todo by
// replacing todo
// by their ID







// add todo button
// update todo button

// input field to update todo's title

// for every keystroke
// update the todo's title,
// but copy old values first




// render all todos
// as line items
// button to delete todo by their ID

// bu

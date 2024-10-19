import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodos = [
          ...state.todos,
        { ...action.payload, id: new Date().getTime().toString() },
      ];
      state.todos = newTodos;
      state.todo = { title: "" };
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
    },
    updateTodo: (state, action) => {
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.todos = newTodos;
      state.todo = { title: "" };
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;

// import createSlice
// declare initial state of reducer
// moved here from TodoList.tsx
// todos has default todos


// todo has default todo

// create slice
// name slice
// configure store's initial state
// declare reducer functions
// addTodo reducer function, action
// contains new todo. newTodos
// copy old todos, append new todo
// in action.payload, override
// id as timestamp
// update todos
// clear todo

// deleteTodo reducer function,
// action contains todo's ID to
// filter out of newTodos

// updateTodo reducer function
// rebuilding newTodos by replacing
// old todo with new todo in
// action.payload
// update todos
// clear todo

// setTodo reducer function
// to update todo state variable



// export reducer functions
// export reducer for store

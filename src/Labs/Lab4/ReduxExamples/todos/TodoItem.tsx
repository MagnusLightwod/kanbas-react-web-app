export default function TodoItem({ todo, deleteTodo, setTodo }: {
    todo: { id: string; title: string };
    deleteTodo: (id: string) => void;
    setTodo: (todo: { id: string; title: string }) => void;
  }) {
    return (
      <li key={todo.id} className="list-group-item">
        <button onClick={() => deleteTodo(todo.id)}
                id="wd-delete-todo-click"> Delete </button>
        <button onClick={() => setTodo(todo)}
                id="wd-set-todo-click"> Edit </button>
        {todo.title}    </li>);}

        // breaks out todo item
// todo to render
// event handler to remove todo
// event handler to select todo



// invoke delete todo with ID

// invoke select todo

// render todo's title

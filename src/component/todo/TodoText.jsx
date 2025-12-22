export default function TodoText({ todo, toggleTodo }) {
  return (
    <span
      onClick={() => toggleTodo(todo.id)}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {todo.text}
    </span>
  );
}

import TodoText from "./TodoText";
import TodoActions from "./TodoActions";

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li style={{ display: "flex", justifyContent: "space-between" }}>
      <TodoText todo={todo} toggleTodo={toggleTodo} />
      <TodoActions id={todo.id} deleteTodo={deleteTodo} />
    </li>
  );
}

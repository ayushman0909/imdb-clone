export default function TodoActions({ id, deleteTodo }) {
  return (
    <button onClick={() => deleteTodo(id)}>❌</button>
  );
}

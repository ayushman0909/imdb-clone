export default function FilterBar({ setFilter }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <button onClick={() => setFilter("ALL")}>All</button>
      <button onClick={() => setFilter("COMPLETED")}>Completed</button>
      <button onClick={() => setFilter("PENDING")}>Pending</button>
    </div>
  );
}

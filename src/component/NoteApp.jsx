import { useEffect, useState } from "react";

function NoteApp() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (note.trim() === "") return;
    setNotes([...notes, note]);
    setNote("");
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Notes App</h2>

      <input
        type="text"
        placeholder="Write note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      />

      <button onClick={addNote} style={{ marginTop: "10px" }}>
        Save Note
      </button>

      <ul>
        {notes.map((n, index) => (
          <li key={index}>
            {n}
            <button onClick={() => deleteNote(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteApp;

import { useContext, useState } from "react";
import Context from "../../context/Context";

export default function Create() {
  const { notes, setNotes } = useContext(Context);
  const [note, setNote] = useState("");

  function handleClick() {
    setNotes([...notes, note]);
    setNote("");
  }

  return (
    <div className="container">
      <h2>To do list</h2>
      <div className="my-create">
        <label htmlFor="note">
          Create notes
          <textarea
            type="text"
            placeholder="note"
            id="note"
            value={note}
            onChange={({ target: { value } }) => setNote(value)}
          />
        </label>

        <button className="my-btn" onClick={() => handleClick()}>
          send
        </button>
      </div>
    </div>
  );
}

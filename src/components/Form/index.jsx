import { useContext, useState } from "react";
import Context from "../../context/Context";
import "./form.css";

export default function Form() {
  const { notes, setNotes } = useContext(Context);
  const [note, setNote] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setNotes([...notes, note]);
    setNote("");
  }

  return (
    <form className="my-create">
      <div className="form-body">
        <label htmlFor="note">Create notes</label>
        <textarea
          type="text"
          placeholder="note"
          id="note"
          value={note}
          onChange={({ target: { value } }) => setNote(value)}
        />
      </div>

      <div className="form-footer">
        <button className="my-btn" onClick={(event) => handleClick(event)}>
          Cadastrar
        </button>
      </div>
    </form>
  );
}

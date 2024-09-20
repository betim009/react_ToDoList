import { useContext, useState } from "react";
import Context from "../../context/Context";
import "./form.css";

export default function Form() {
  const { notes, setNotes } = useContext(Context);
  const [note, setNote] = useState({
    title: "",
    note: "",
    data: "",
  });

  function handleChange({ target }) {
    const { name, value } = target;

    setNote((prev) => ({
      ...prev,
      [name]: value,
      data: new Date(),
    }));
  }

  function handleClick(e) {
    e.preventDefault();
    setNotes([...notes, note]);
    setNote({ title: "", note: "", data: "" });
  }

  return (
    <form className="my-create">
      <div className="form-body">
        <label htmlFor="title">Title Note</label>
        <input
          type="text"
          placeholder="title"
          value={note.title}
          name="title"
          id="title"
          onChange={handleChange}
        />

        <label htmlFor="note">Your note</label>
        <textarea
          type="text"
          placeholder="note"
          id="note"
          name="note"
          value={note.note}
          onChange={handleChange}
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

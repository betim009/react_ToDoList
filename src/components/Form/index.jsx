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
  const [span, setSpan] = useState(false);

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

    if (note.title.length === 0 || note.note.length === 0) {
      return setSpan(true);
    } else {
      setSpan(false);
    }

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
        {span ? <span className="empity">empity fields</span> : null}

        <label htmlFor="note">Your note</label>
        <textarea
          className="text-area"
          type="text"
          placeholder="note"
          id="note"
          name="note"
          value={note.note}
          onChange={handleChange}
        />
        {span ? <span className="empity">empity fields</span> : null}
      </div>

      <div className="form-footer">
        <button className="my-btn" onClick={(event) => handleClick(event)}>
          Cadastrar
        </button>
      </div>
    </form>
  );
}

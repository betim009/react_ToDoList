import { useContext } from "react";
import Context from "../context/Context";

export function useRemoveNote() {
    const { notes, setNotes } = useContext(Context);
  
    const removeNote = (note) => {
      const filteredNotes = notes.filter((e) => e !== note);
      setNotes([...filteredNotes]);
    };
  
    return removeNote; // Retorna a função que será usada no componente
  }

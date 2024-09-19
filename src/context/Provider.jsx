import { useEffect, useState } from "react";
import Context from "./Context";

export default function Provider({ children }) {
  const [notes, setNotes] = useState([]);

  const contextValue = {
    notes,
    setNotes,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

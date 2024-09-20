import { useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

export default function Provider({ children }) {
  const [notes, setNotes] = useState([]);

  const contextValue = {
    notes,
    setNotes,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

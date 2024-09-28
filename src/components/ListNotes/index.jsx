import PropTypes from "prop-types";
import { useRemoveNote } from "../../hooks/useRemove";
import { useRef, useState } from "react";
import MyModal from "../MyModal";

export default function ListNotes({ data }) {
  const removeNote = useRemoveNote();
  const myModal = useRef(null);
  const [element, setElement] = useState(null);

  const handleOpenModal = (e) => {
    myModal.current.showModal();
    setElement(e);
  };

  return (
    <div>
      {data.map((element, index) => (
        <div key={index} className="my-note">
          <p>{element.title}</p>
          <i
            className="bi bi-x-octagon i-home"
            onClick={() => {
              removeNote(element);
            }}
          ></i>
          <i className="bi bi-pencil i-home" onClick={() => handleOpenModal(element)}></i>
        </div>
      ))}
      <MyModal
        info={{
          modal: myModal,
          title: "Change",
          element,
        }}
      />
    </div>
  );
}

ListNotes.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

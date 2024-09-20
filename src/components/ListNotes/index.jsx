import PropTypes from "prop-types";
import { useRemoveNote } from "../../hooks/useRemove";
import { useRef } from "react";
import MyModal from "../MyModal";

export default function ListNotes({ data }) {
  const removeNote = useRemoveNote();
  const myModal = useRef(null);

  return (
    <div>
      {data.map((element, index) => (
        <div key={index} className="my-note">
          <p>{element.title}</p>
          <i
            className="bi bi-x-octagon"
            onClick={() => {
              removeNote(element);
            }}
          ></i>
          <i
            className="bi bi-pencil"
            onClick={() => myModal.current.showModal()}
          ></i>
          <MyModal
            info={{
              modal: myModal,
              title: "Editar",
              element,
            }}
          />
        </div>
      ))}
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

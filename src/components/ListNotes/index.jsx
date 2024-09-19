import PropTypes from "prop-types";
import { useRemoveNote } from "../../hooks/useRemove";

export default function ListNotes({ data }) {
  const removeNote = useRemoveNote();

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
          <i className="bi bi-pencil"></i>
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

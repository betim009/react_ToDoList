import PropTypes from "prop-types";
import "./myModal.css";

export default function MyModal({ info }) {
  return (
    <>
      <dialog ref={info.modal}>
        <div className="header">{info.title}</div>

        <div className="body">
          <textarea
            className="text-modal"
            type="email"
            name=""
            placeholder="change value note"
          />
        </div>

        <div className="footer">
          <button>Change</button>
          <button onClick={() => info.modal.current.close()}>close x </button>
        </div>
      </dialog>
    </>
  );
}

MyModal.propTypes = {
  info: PropTypes.node.isRequired,
};

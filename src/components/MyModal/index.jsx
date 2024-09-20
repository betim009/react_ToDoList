import PropTypes from "prop-types";

export default function MyModal({ info }) {
  return (
    <>
      <dialog ref={info.modal}>
        <div className="header">{info.title}</div>

        <div className="body">...</div>

        <div className="footer">
          <button onClick={() => info.modal.current.close()}>close x </button>
        </div>
      </dialog>
    </>
  );
}

MyModal.propTypes = {
  info: PropTypes.node.isRequired,
};

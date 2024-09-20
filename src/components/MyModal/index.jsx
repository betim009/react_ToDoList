import PropTypes from "prop-types";

export default function MyModal({ info }) {
  return (
    <>
      <dialog ref={info.modal}>
        <div className="header">{info.title}</div>

        <div className="body">
          <input type="email" name="" placeholder="change value note" />
          <button>Change</button>
        </div>

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

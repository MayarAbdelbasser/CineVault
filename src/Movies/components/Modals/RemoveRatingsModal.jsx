import "./Modals.css";

function RemoveRatingsModal({ onClose, onConfirm }) {
  return (
    <div className=" popup__overlay">
      <div className="remove">
        <p className="delete__heading">Delete Confirmation</p>
        <p>Are you sure you want to delete all ratings?</p>
        <div className="delete__btns">
          <button
            type="button"
            className="btn delete__close btn-secondary"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn delete__confirm btn-primary"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default RemoveRatingsModal;

import "./Modals.css";

function DeleteMovieModals({ onClose, onConfirm }) {
  return (
    <div className=" popup__overlay">
      <div className="delete">
        <p className="delete__heading">Delete Confirmation</p>
        <p>Are you sure you want to delete this movie?</p>
        <div className="delete__btns">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="btn btn-primary" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteMovieModals;

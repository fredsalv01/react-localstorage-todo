

export const VisibilityControl = ({setShowCompleted, cleanTasks, isChecked}) => {

  const handleDelete = () => {
    if(window.confirm("¿Estás seguro de que quieres eliminar todas las tareas completadas?")) {
      cleanTasks();
    }
  }

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role={"switch"}
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
          id="showCompleted"
        />{" "}
        <label className="form-check-label" htmlFor="showCompleted">Show Tasks Done</label>
      </div>

      <button className="btn btn-danger btn-sm" style={{"fontWeight":"bold"}} onClick={handleDelete}>
        Clear
      </button>
    </div>
  );
}

export default VisibilityControl;
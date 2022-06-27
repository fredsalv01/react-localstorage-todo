import React from 'react';

export const VisibilityControl = ({setShowCompleted, cleanTasks, isChecked}) => {

  const handleDelete = () => {
    if(window.confirm("¿Estás seguro de que quieres eliminar todas las tareas completadas?")) {
      cleanTasks();
    }
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
      <label>Show Tasks Done</label>

      <button onClick={handleDelete}>
        Clear
      </button>
    </div>
  );
}

export default VisibilityControl;
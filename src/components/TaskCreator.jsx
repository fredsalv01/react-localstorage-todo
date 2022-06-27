import { useState } from 'react';

export const TaskCreator = ({createNewTask}) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName('');
  }

  return (
    <form className='my-2 row' onSubmit={handleSubmit} >
      <div className='col-9'>
        <input 
          className='form-control'
          type="text" 
          placeholder='Enter a new task'
          value={newTaskName} 
          onChange={(e) => setNewTaskName(e.target.value)} 
        />
      </div>
      <div className='col-3 d-grid'>
        <button className='btn btn-primary btn-sm btn-block' style={{"fontWeight":"bold"}}>Save Task</button>
      </div>
    </form>
  );
}
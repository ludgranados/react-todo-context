import React, { useState, event } from 'react';

const AddTodoComponent = () => {
    const [todoItem, setTodoItem] = useState('');

    const handleSubmit = (addTodo) => {
        event.preventDefault();
        addTodo(todoItem);
        setTodoItem('');
      };
 
    return (
        <div >
        <form>
    <input
      type='text'
      className='form-control'
      value={todoItem}
      onChange={event => setTodoItem(event.target.value)}
    />

    <div className='input-group-append text-center my-2'>
            <button 
            className='btn btn-secondary' 
            onClick={handleSubmit}>
              Add
            </button>
    </div>
     
  </form>
    </div>
  );
};

export default AddTodoComponent;
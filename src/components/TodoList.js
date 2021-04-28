import React from 'react';
import TodoComponent from './Todo';

const TodoListComponent = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div className='col'>

            <button className="btn btn-primary" 
            style={{marginLeft: '', 
            marginTop: '1%', 
            marginBottom: '2%'}} 
            onClick={handleFilter}>Clear Completed</button>

            {toDoList.map(todo => {
                return (

                    <TodoComponent todo={todo} 
                    handleToggle={handleToggle} 
                        handleFilter={handleFilter}/>
                )
            })}
            
        </div>
    );
};

export default TodoListComponent;
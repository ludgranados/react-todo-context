import React from 'react';
import TodoComponent from './Todo';

const TodoListComponent = ({ toDoList, handleToggle, handleFilter }) => {
    return (
        <div className='col'>

            <button className="btn btn-primary" 
            style={{marginLeft: '', 
            marginTop: '1%', 
            marginBottom: '2%',
            marginLeft: '76%'}} 
            onClick={handleFilter}>Clear Task</button>

            {toDoList.map(todo => {
                return (
                    <div class='card'>
                      {/* <div class='card-title'> */}
                      <TodoComponent 
                     todo={todo} 
                     handleToggle={handleToggle}
                     />  
                     {/* </div>   */}
                    </div>
                    

                    


                )
            })}
            
        </div>
    );
};

export default TodoListComponent;
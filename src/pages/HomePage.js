import React, { useState } from 'react';
import data from '../data.json';

/** Components for the list */
import TodoListComponent from "../components/TodoList";
import AddTodoComponent from '../components/AddTodo';

const HomePage = () => {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {

    let mapped = toDoList.map(task => {

      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });

    setToDoList(mapped);

  }

  const handleFilter = () => {

    let filtered = toDoList.filter(task => {
      return !task.complete;
    });

    setToDoList(filtered);

  }

  const addTask = (userInput ) => {

    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);

  }

    return (
      
        <div className='row text-center'>
            
            
          <div className='col'>
            <AddTodoComponent addTask={addTask} />

            <TodoListComponent toDoList={toDoList} 
            handleToggle={handleToggle} 
            handleFilter={handleFilter} 
            />

          </div>

        </div>
    
    );
  };
  
  export default HomePage;
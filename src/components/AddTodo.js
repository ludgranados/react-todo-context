import React, { useState } from 'react';

const AddTodoComponent = ({ addTask }) => {
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');

        if (!userInput) {
            alert(`You did not enter a task! Try again!`);
          } else {
            alert(`${userInput} has been added to your to do list!`);
          }
    }
    return (
        <div className='col text-center md-col-12'>

          <form onSubmit={handleSubmit}>
            <div>

            <input 
            style={{marginTop: '2%', width: '80%', textAlign: 'center'}}
            value={userInput} 
            type='text'
            onChange={handleChange} 
            placeholder="Please enter your task!"
            />

              <button style={{marginLeft: '1%'}} 
              className="btn btn-primary" >Add</button>   
            </div>
            
          </form>  
        </div>
        

       
    );
     
};

export default AddTodoComponent;
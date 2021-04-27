import TodoComponent from '../components/Todo';
const HomePage = () => {
    return (
      
        <div className='row text-center'>
            
            <div className='col-12'>
             <h1>To-do List</h1>
            </div>
            
          <div className='col'>
            <TodoComponent />
          </div>

        </div>
    
    );
  };
  
  export default HomePage;
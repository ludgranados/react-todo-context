import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>

      <h1 className='navbar-brand'>
        To-do Context
      </h1>

      <div className='collapse navbar-collapse'>
        <div className='navbar-nav'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
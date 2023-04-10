import { Link, NavLink } from 'react-router-dom';
// import "../Styles/Navigation.css";
import "../Styles/colinNav.css";


function Navigation() {
    return (
      <nav className="nav">
        <span className='span'>
    
          <Link to="/" className="span">
            Home
          </Link>
          
        </span>
        <span className="span"> <Link to="/reg"  className="span">
            Home
          </Link></span>
        <span className="span">contact us</span>
        <span className="span">contact us</span>
        <span className="span">contact us</span>
        <span className="span">contact us</span>
        <span className="span">contact us</span>
      </nav>
    );
  }
  
  export default Navigation;
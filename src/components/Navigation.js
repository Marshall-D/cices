import { Link, NavLink } from 'react-router-dom';
import "../Styles/Navigation.css";
// import "../Styles/colinNav.css";


function Navigation() {
    return (
      <nav className="nav">
        <span className="span">
          <Link to="/" className="span">
            Home
          </Link>
        </span>
        <span className="span">
          {" "}
          <Link to="/reg" className="span">
            Registration
          </Link>
        </span>
        <span className="span">
          {" "}
          <Link to="/Visa" className="span">
            Canada Visa
          </Link>
        </span>
        <span className="span">
          {" "}
          <Link to="/Call" className="span">
            Call For Paper
          </Link>
        </span>
        <span className="span">
          {" "}
          <Link to="/Contact" className="span">
            Conact Us
          </Link>
        </span>
        <span className="span">
          {" "}
          <Link to="/Speakers" className="span">
            Speakers 
          </Link>
        </span>
        <span className="span">
          {" "}
          <Link to="/Travel" className="span">
            Travel and Hotel
          </Link>
        </span>
      </nav>
    );
  }
  
  export default Navigation;
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom'
import '../App.css';



function Formatter() {
  return (
    <div className="formatter">
      <div className="main_wrapper_outer">
        <div className="main_wrapper">
          <Header></Header>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Formatter;
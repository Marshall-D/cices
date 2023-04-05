import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom'


function Formatter() {
  return (
    <div className="inner_body">
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
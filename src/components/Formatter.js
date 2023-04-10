import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom'
import '../App.css';
import Navigation from './Navigation';
import Mobile from './Mobile';
import "../Styles/Mobile.css";




function Formatter() {
  return (
    // <div className="formatter">
    <body style={{margin:"0"}}>
      {/* <div className="main_wrapper_outer">
        <div className="main_wrapper"> */}
      {/* <Mobile></Mobile> */}
      <div className="mobile_top_bar" />
      <Header />
      <Navigation />
      <Outlet />
      {/* </div> */}
      <Footer />
    </body>
    // </div>
  );
}

export default Formatter;
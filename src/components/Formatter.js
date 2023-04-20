import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom'
import '../App.css';
import Navigation from './Navigation';
import Mobile from './Mobile';
// import "../Styles/Mobile.css";




function Formatter() {
  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
    <div style={{width: "100%"}}><Header/></div>
    <Navigation/>
    <div style={{display: "flex", width: "100%", flexWrap: "wrap", gap: "20px"}}>
                {/* <div  style={{flex: "1.2"}}> */}
 <Outlet/>
 {/* </div> */}
        {/* <div  style={{flex: "0.8"}}>
        <Side/>
        </div> */}
    </div>
    <div><Footer/></div>
</div>
  );
}

export default Formatter;
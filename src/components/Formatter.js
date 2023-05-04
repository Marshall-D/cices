import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom'
import '../App.css';
import Navigation from './Navigation';
import TopHeader from './TopHeader';




function Formatter() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div>
        <TopHeader/>
      </div>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      <Navigation />
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Formatter;
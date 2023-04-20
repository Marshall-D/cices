import Mobile from "./Mobile";
import Navigation from "./Navigation";
import {ImMenu} from "react-icons/im"
import {MdClose} from "react-icons/md"
// import "../Styles/Header.css";
import "../Styles/Colin.css";
import React, {useContext} from 'react'
import { AuthContext } from '../Context/Context';
import { Link, NavLink } from 'react-router-dom';




function Header()  {
  const { showSide, toggleSide} = useContext(AuthContext)
  const show ={
    background: "grey",
    color: "white"
  }
  const noShow ={
    // color: "#474747"
  }
    return (
      <div className="header_wrapper_1">
      <div className="header_wrapper">
        <div className="header_extra_1"></div>
        <div className="header_extra_2">
          {
            !showSide? <div style={{paddingLeft: "20px",display: "flex", alignItems: "center", height: "100%"}} onClick={toggleSide}>
          <ImMenu color="color: #a49588" fontSize="2em"/>
          </div>:
          <div style={{paddingLeft: "20px",display: "flex", alignItems: "center", height: "100%"}} onClick={toggleSide}>
          <MdClose color="color: #a49588" fontSize="2em"/>
          </div>
          }
          <div></div>
        </div>
        {
          showSide && <div className='burger' onClick={toggleSide}>
            <Mobile/>
     
          </div>
        }
          
        
          <div id="header_wrapper_1">
              <header role="banner" className="header_img">
                <div id="inner_banner">
               

                  <hgroup>
                    <div className="h1_outer">
                    <div className="h1_bg"></div>
                      <h1 className="hd_1">
                        Canada International Conference On Engineering and
                        Sciences
                      </h1>
                    </div>
                    <div className="header_spacer"></div>
                    <div className="h2_outer">
                      <div className="h2_bg"></div>
                      <h2 style={{fontSize: "1em", color:"ffffff9c"}} className="hd_1">
                        CICES 2023 |May 21 -25, 2023 | Calgary, Canada
                      </h2>
                    </div>
                  </hgroup>
                </div>
                {/* <!-- END OF 'inner_banner' --> */}
              </header>
              {/* <!-- END OF 'header' --> */}
            </div>

          {/* <!-- END OF 'header_wrapper_1' --> */}
        </div>

      </div>
    );

}
export default Header;

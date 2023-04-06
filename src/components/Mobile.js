import { Link, NavLink } from 'react-router-dom';
import "../Styles/Mobile.css";

function Mobile() {
    return (
      <div>
        <div id="mobile_overlay" />
        <div className="mobile_top_bar">
          <ul className='mobile_top_bar_ul'>
            <li className="mobile_open_menu">
              <div className="nav_icon_3">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>

            {/* <li class="mobile_search_box">
              <form
                accept-charset="UTF-8"
                action="search"
                id="admin_search"
                method="get"
              >
                <div style={{ margin: "0", padding: "0", display: "inline" }}>
                  <input name="utf8" type="hidden" value="✓" />
                </div>
                <div class="search-control">
                  <span class="admin_search_box">
                    <input
                      type="text"
                      name="q"
                      value=""
                      placeholder="Enter search keyword(s)"
                    />
                  </span>
                  <span class="util_search_button">
                    <input value="" type="submit" />
                  </span>
                </div>
              </form>{" "}
            </li>

            <li class="mobile_social">
              <div></div>
            </li> */}
          </ul>
        </div>
        <div className="mobile_menu">
          <div >
            <ul className='mobile_menu_ul'>
              <li className="mobile_menu_title">
                <div style={{padding: "15px"}}>
                  Canada International Conference On Engineering and Sciences
                  <span className='mobile_menu_title_span'>CICES 2023 |May 21 -25, 2023 | Calgary, Canada</span>
                </div>
              </li>
              <li className='mobile_menu_li'>
              <Link to="/" className="mobile_menu_a">Home</Link>
              
              </li>
              <li className='mobile_menu_li'>
            <Link to="call" className="mobile_menu_a">Call For Exhibitors</Link>
            
              </li>
              <li className='mobile_menu_li'>
            <Link to="reg" className="mobile_menu_a">Registration</Link>
               
              </li>
              <li className='mobile_menu_li'>
            <Link to="travel" className="mobile_menu_a">Travel and Hotel</Link>
                 
              </li>
              <li className='mobile_menu_li'>
            <Link to="speakers" className="mobile_menu_a">Speakers</Link>
               
              </li>
              <li className='mobile_menu_li'>
            <Link to="Visa" className="mobile_menu_a">Canada Visa</Link>
             
              </li>
              <li className='mobile_menu_li'>
            <Link to="contact" className="mobile_menu_a">Contact us</Link>
                  
              </li>

              <li class="mobile_social_menu">
                <div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  export default Mobile;
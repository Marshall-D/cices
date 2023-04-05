import { Link, NavLink } from 'react-router-dom';


function Navigation() {
    return (
      <div id="navigation_wrapper">
        <div id="nav_border_top"></div>
        <div id="menus_x1"></div>
        <div id="menus_x2"></div>
        <div id="navigation">
          <nav id="h_nav">
            <ul id="main_menu_h">
              <li
                style={{zIndex: "1"}}
                id="menu14686303"
                class="menu_top h_menu_selected"
              >
                <span class="main_menu_outer_2_selected">
                  <span class="main_menu_outer_1_selected">
                    <span class="outer_menu_x">
                      <span class="menu_x1"></span>
                      <span class="menu_x2"></span>
                      <Link to="/" className="burger_menu2">Home</Link>

                    </span>
                  </span>
                </span>{" "}
              </li>
              <li style={{zIndex: "1"}} id="menu14686302" class="menu_top h_menu">
                <span class="main_menu_outer_2">
                  <span class="main_menu_outer_1">
                    <span class="outer_menu_x">
                      <span class="menu_x1"></span>
                      <span class="menu_x2"></span>
                      <Link to="call" className="burger_menu2">Call For Exhibitors</Link>

                    </span>
                  </span>
                </span>{" "}
              </li>
              <li style={{zIndex: "1"}} id="menu14686304" class="menu_top h_menu">
                <span class="main_menu_outer_2">
                  <span class="main_menu_outer_1">
                    <span class="outer_menu_x">
                      <span class="menu_x1"></span>
                      <span class="menu_x2"></span>
                      <Link to="reg" className="burger_menu2">Registration</Link>

                    </span>
                  </span>
                </span>{" "}
              </li>
              <li style={{zIndex: "1"}} id="menu14874771" class="menu_top h_menu">
                <span class="main_menu_outer_2">
                  <span class="main_menu_outer_1">
                    <span class="outer_menu_x">
                      <span class="menu_x1"></span>
                      <span class="menu_x2"></span>
                      <Link to="travel" className="burger_menu2">Travel and Hotel</Link>

                    </span>
                  </span>
                </span>{" "}
              </li>
              <li
                style={{zIndex: "1"}}
                id="menu14874784"
                class="menu_top h_menu align_right"
              >
                <span class="main_menu_outer_2">
                  <span class="main_menu_outer_1">
                    <span class="outer_menu_x">
                      <span class="menu_x1"></span>
                      <span class="menu_x2"></span>
                      <Link to="speakers" className="burger_menu2">Speakers</Link>

                    </span>
                  </span>
                </span>{" "}
              </li>
              <li
                style={{zIndex: "1"}}
                id="menu14874799"
                class="menu_top h_menu align_right"
              >
                <span class="main_menu_outer_2">
                  <span class="main_menu_outer_1">
                    <span class="outer_menu_x">
                      <span class="menu_x1"></span>
                      <span class="menu_x2"></span>
                      <Link to="Visa" className="burger_menu2">Canada Visa</Link>

                    </span>
                  </span>
                </span>{" "}
              </li>
              <li style={{zIndex: "1"}} id="menu14686305" class="menu_top h_menu">
                <span class="main_menu_outer_2">
                  <span class="main_menu_outer_1">
                    <span class="outer_menu_x">
                      <span class="menu_x1"></span>
                      <span class="menu_x2"></span>
                      <Link to="contact" className="burger_menu2">Contact us</Link>

                    </span>
                  </span>
                </span>{" "}
              </li>
            </ul>
          </nav>
        </div>
        {/* <!-- END OF 'navigation' --> */}
        <div id="nav_border_bottom"></div>
      </div>
    );
  }
  
  export default Navigation;
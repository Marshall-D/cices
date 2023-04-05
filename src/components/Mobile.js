import { Link, NavLink } from 'react-router-dom';

function Mobile() {
    return (
      <div>
        <div id="mobile-overlay" />
        <div id="mobile_top_bar">
          <ul>
            <li class="mobile_open_menu">
              <div id="nav-icon3">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>

            <li class="mobile_search_box">
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
            </li>
          </ul>
        </div>
        <div id="mobile_menus">
          <div id="mobile_menus_inner">
            <ul>
              <li id="mobile_menus_title">
                <div>
                  Canada International Conference On Engineering and Sciences
                  <span>CICES 2023 |May 21 -25, 2023 | Calgary, Canada</span>
                </div>
              </li>
              <Link to="/" className="burger_menu2">Home</Link>
            <Link to="call" className="burger_menu2">Call For Exhibitors</Link>
            <Link to="reg" className="burger_menu2">Registration</Link>
            <Link to="Visa" className="burger_menu2">Visa</Link>
            <Link to="speakers" className="burger_menu2">Speakers</Link>
            <Link to="contact" className="burger_menu2">Contact us</Link>
            <Link to="travel" className="burger_menu2">Travel and Hotel</Link>
              {/* <li id="menu14686303" class="mobile_menu_selected">
                <a class="outer_title" href="home.html">
                  <span class="menu_wrap loadable">
                    Home<div class="loader">Loading...</div>
                    <div class="loader">Loading...</div>
                  </span>
                </a>
              </li>
              <li id="menu14686302" class="mobile_menu">
                <a class="outer_title" href="papersubmission.html">
                  <span class="menu_wrap loadable">
                    Call For Paper<div class="loader">Loading...</div>
                    <div class="loader">Loading...</div>
                  </span>
                </a>
              </li>
              <li id="menu14686304" class="mobile_menu">
                <a class="outer_title" href="registration.html">
                  <span class="menu_wrap loadable">
                    Registration<div class="loader">Loading...</div>
                    <div class="loader">Loading...</div>
                  </span>
                </a>
              </li>
              <li id="menu14874771" class="mobile_menu">
                <a class="outer_title" href="travel-and-hotel.html">
                  <span class="menu_wrap loadable">
                    Travel and Hotel<div class="loader">Loading...</div>
                    <div class="loader">Loading...</div>
                  </span>
                </a>
              </li>
              <li id="menu14874784" class="mobile_menu">
                <a class="outer_title" href="speaker-and-committee.html">
                  <span class="menu_wrap loadable">
                    Speaker and Committee<div class="loader">Loading...</div>
                    <div class="loader">Loading...</div>
                  </span>
                </a>
              </li>
              <li id="menu14874799" class="mobile_menu">
                <a class="outer_title" href="canada-visa.html">
                  <span class="menu_wrap loadable">
                    Canada Visa<div class="loader">Loading...</div>
                    <div class="loader">Loading...</div>
                  </span>
                </a>
              </li>
              <li id="menu14686305" class="mobile_menu">
                <a class="outer_title" href="contact.html">
                  <span class="menu_wrap loadable">
                    contact Us<div class="loader">Loading...</div>
                    <div class="loader">Loading...</div>
                  </span>
                </a>
              </li> */}

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
import { Link } from 'react-router-dom';
import "../Styles/Mobile.css";

function Mobile() {
    return (
      <div>
        <div className="mobile_menu">
          <div>
            <ul className="mobile_menu_ul">
              <li className="mobile_menu_title">
                <div style={{ padding: "15px" }}>
                  Canada International Conference On Engineering and Sciences
                  <span className="mobile_menu_title_span">
                    CICES 2023 |August 21 -25, 2023 | Calgary, Canada
                  </span>
                </div>
              </li>
              <li className="mobile_menu_li">
                <Link to="/" className="mobile_menu_a">
                  Home
                </Link>
              </li>
              <li className="mobile_menu_li">
                <Link to="call" className="mobile_menu_a">
                  Call For Exhibitors
                </Link>
              </li>
              <li className="mobile_menu_li">
                <Link to="reg" className="mobile_menu_a">
                  Registration
                </Link>
              </li>
              <li className="mobile_menu_li">
                <Link to="travel" className="mobile_menu_a">
                  Travel and Hotel
                </Link>
              </li>
              <li className="mobile_menu_li">
                <Link to="speakers" className="mobile_menu_a">
                  Speakers
                </Link>
              </li>
              <li className="mobile_menu_li">
                <Link to="Visa" className="mobile_menu_a">
                  Canada Visa
                </Link>
              </li>
              <li className="mobile_menu_li">
                <Link to="contact" className="mobile_menu_a">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  export default Mobile;
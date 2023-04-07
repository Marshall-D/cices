import Mobile from "./Mobile";
import Navigation from "./Navigation";
import "../Styles/Header.css";


function Header()  {
    return (
      <div>
        <div className="header_wrapper_2">
          
        
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
                      <h2 style={{fontSize: "1.6em"}} className="hd_1">
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

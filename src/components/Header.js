import Mobile from "./Mobile";
import Navigation from "./Navigation";

function Header()  {
    return (
      <div>
        <Mobile></Mobile>
        <Navigation></Navigation>
        <div id="header_wrapper_2">
          <div class="">
            <div id="header_shade_2">
              <div id="header_shade"></div>
            </div>
          </div>
          <div class="">
            <div id="u_header_shade_2">
              <div id="u_header_shade"></div>
            </div>
          </div>
          <div id="header_wrapper_1">
            <div id="header_wrapper">
              <div id="header_extra_1"></div>
              <div id="header_extra_2"></div>
              <header role="banner" id="header_img_none">
                <div id="inner_banner">
                  <div id="header_extra_3"></div>
                  <div id="header_extra_4"></div>

                  <hgroup
                    onclick="document.location='/';"
                    style={{cursor: "pointer"}}
                  >
                    <div class="h1_outer outer_title">
                      <div class="h1_bg"></div>
                      <h1 class="site_hdr">
                        Canada International Conference On Engineering and
                        Sciences
                      </h1>
                    </div>
                    <div class="header_spacer"></div>
                    <div class="h2_outer">
                      <div class="h2_bg"></div>
                      <h2 class="site_hdr">
                        CICES 2023 |May 21 -25, 2023 | Calgary, Canada
                      </h2>
                    </div>
                  </hgroup>
                </div>
                {/* <!-- END OF 'inner_banner' --> */}
              </header>
              {/* <!-- END OF 'header' --> */}
            </div>
            {/* <!-- END OF 'header_wrapper' --> */}
          </div>
          {/* <!-- END OF 'header_wrapper_1' --> */}
        </div>
      </div>
    );

}
export default Header;

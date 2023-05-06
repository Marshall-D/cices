import "../Styles/Home.css";

function Side() {
  return (
    <aside className="sidebar_1" role="complementary">
      <section className="box_234">
        <div className="inner_box">
          <div className="box_bg"></div>
          <div className="box_content_header">
            <div className="box_content_header_inner">
              <div className="hgroup_outer">
                <hgroup className="outer_title">
                  <h3>
                    <span className="box_note_icon" aria-hidden="true">
                      
                    </span>{" "}
                    <span className="btt">Important Dates </span>
                  </h3>
                </hgroup>
              </div>
            </div>

            <div className="box_content_headers_bg_outer">
              <div className="box_content_headers_bg_fade"></div>
              <div className="box_content_headers_bg_outer_1">
                <div className="box_content_headers_bg"></div>
                <div className="box_content_headers_bg2"></div>
              </div>
            </div>
          </div>

          <div className="box_content_body">
            <div className="box_content_body_bg"></div>
            <div className="box_body-inner_2">
              <div className="box_content_body_inner_2">
                <p>
                  <img
                    className="age"
                    src="https://cices.icmbpsgroup.com/index_files/covid-19-update-news.jpg"
                  />
                </p>
                <p>
                August&nbsp;&nbsp;21-25, 2023 Conference Date
                  <br />
                  August 13, 2023 - Abstract Submission Deadline
                  <br />
                  August 10, 2023&nbsp;- Full Paper Submission Deadline
                  <br />
                  August&nbsp;&nbsp;15, 2023 - Registration Deadline
                </p>
                <p>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="box_234">
        <div className="inner_box">
          <div className="box_bg"></div>
          <div className="box_content_headers">
            <div className="box_content_headers_inner_1">
              <div className="hgroup_outer">
                <hgroup className="outer_title">
                  <h3>
                    <span className="box_note_icon" aria-hidden="true">
                      
                    </span>{" "}
                    <span className="btt">Venue</span>
                  </h3>
                </hgroup>
              </div>
            </div>

            <div className="box_content_headers_bg_outer">
              <div className="box_content_headers_bg_fade"></div>
              <div className="box_content_headers_bg_outer_1">
                <div className="box_content_headers_bg"></div>
                <div className="box_content_headers_bg2"></div>
              </div>
            </div>
          </div>

          <div className="box_content_body">
            <div className="box_content_body_bg"></div>
            <div className="box_content_body_inner_1">
              <div className="box_content_body_inner_2">
                <p></p>
                <p></p>
                <p>
                  2478 Pegasus Rd NE
                  <br />
                  Calgary, AB T2E 8G8, Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="box_234">
        <div className="inner_box">
          <div className="box_bg"></div>
          <div className="box_content_headers">
            <div className="box_content_headers_inner_1">
              <div className="hgroup_outer">
                <hgroup className="outer_title">
                  <h3>
                    <span className="box_note_icon" aria-hidden="true">
                      
                    </span>{" "}
                    <span className="btt">Agenda</span>
                  </h3>
                </hgroup>
              </div>
            </div>

            <div className="box_content_headers_bg_outer">
              <div className="box_content_headers_bg_fade"></div>
              <div className="box_content_headers_bg_outer_1">
                <div className="box_content_headers_bg"></div>
                <div className="box_content_headers_bg2"></div>
              </div>
            </div>
          </div>

          <div className="box_content_body">
            <div className="box_content_body_bg"></div>
            <div className="box_content_body_inner_1">
              <div className="box_content_body_inner_2">
                <p>To Be Announced&nbsp;</p>
                <p>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="box_234">
        <div className="inner_box">
          <div className="box_bg"></div>
          <div className="box_content_headers">
            <div className="box_content_headers_inner_1">
              <div className="hgroup_outer">
                <hgroup className="outer_title">
                  <h3>
                    <span
                      className="box_note_icon"  
                      aria-hidden="true"
                    >
                      
                    </span>{" "}
                    <span className="btt">Login</span>
                  </h3>
                </hgroup>
              </div>
            </div>

            <div className="box_content_headers_bg_outer">
              <div className="box_content_headers_bg_fade"></div>
              <div className="box_content_headers_bg_outer_1">
                <div className="box_content_headers_bg"></div>
                <div className="box_content_headers_bg2"></div>
              </div>
            </div>
          </div>

          <div className="box_content_body">
            <div className="box_content_body_bg"></div>
            <div className="box_content_body_inner_1">
              <div className="box_content_body_inner_2">
                <form accept-charset="UTF-8" action="auth/login" method="post">
                  <div style={{ margin: "0", padding: "0", display: "inline" }}>
                    <input name="utf8" type="hidden" value="✓" />
                    <input
                      name="authenticity_token"
                      type="hidden"
                      value="VjUZZbwfJvrkUsseVGkA73MKTdyc3RC9Ve7v8icFf8s="
                    />
                  </div>
                  <input
                    id="redirect_to_back"
                    name="redirect_to_back"
                    type="hidden"
                    value="true"
                  />
                  <table className="login" width="100%" summary="layout table">
                    <tbody>
                      <tr className="row1">
                        <td>
                          <label>Email:</label>
                        </td>
                      </tr>
                      <tr className="row2">
                        <td>
                          <span className="textbox" id="login_box_email">
                            <input
                              className="login"
                              id="user_email_address"
                              name="user[email_address]"
                              size="10"
                              type="text"
                              value=""
                            />
                          </span>
                        </td>
                      </tr>
                      <tr className="row3">
                        <td>
                          <label>Password:</label>
                        </td>
                      </tr>
                      <tr className="row4">
                        <td>
                          <span className="textbox" id="login_box_pwd">
                            <input
                              className="password"
                              id="user_password"
                              name="user[password]"
                              size="10"
                              type="password"
                              value=""
                            />
                          </span>
                        </td>
                      </tr>
                      <tr className="row5">
                        <td>
                          <span className="button" id="login_box_submit">
                            <input className="btn" type="submit" value="Login" />
                          </span>
                        </td>
                      </tr>
                      <tr className="row6">
                        <td className="login_box_remember_me">
                          <span className="checkbox" id="ç">
                            <input
                              id="save_login"
                              name="save_login"
                              type="checkbox"
                              value="1"
                            />
                          </span>{" "}
                          <label>Remember Me</label>
                        </td>
                      </tr>
                      <tr className="row7">
                        <td className="login_box_links">
                          <span className="iconlink">
                            <a href="auth/forgot_password">
                              {" "}
                              <span className="doodlepic_icon" aria-hidden="true">
                                
                              </span>{" "}
                              <span className="link_text">Forgot Password?</span>
                            </a>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </aside>
  );
}

export default Side;
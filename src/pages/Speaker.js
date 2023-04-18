import Side from "../components/Side";
import "../Styles/ColinBody.css";

function Speaker() {
  return (
    <div className="container_wrapper_2">
      <div className="container_wrapper_1">
        <div className="container_wrapper">
          <div className="sidebar">
            {" "}
            <div className="content">
              <div className="content_inner">
                <div id="main_content">
                  <div className="main_content_bg"></div>
                  <section id="quick_edit_container">
                    <div id="quick_content">
                      <div id="content_headers">
                        <div id="content_headers_inner_1">
                          <div className="hgroup_outer">
                            <hgroup id="page_titles">
                              <div className="outer_title">
                                <h1 className="btt" style={{ fontSize: "1.6em" }}>
                                  Speaker and Committee{" "}
                                </h1>{" "}
                              </div>
                              <span class="sub_title_spacer"></span>
                              <h2 className="speaker">Featured Speakers</h2>
                            </hgroup>
                          </div>
                        </div>
                        <div id="content_headers_bg_outer">
                          <div id="content_headers_bg_fade"></div>
                          <div id="content_headers_bg_outer_1">
                            <div id="content_headers_bg"></div>
                            <div id="content_headers_bg2"></div>
                          </div>
                        </div>
                      </div>

                      <div class="content_body">
                        <div class="content_body_inner_1">
                          <div class="content_body_inner_2">
                            <h2>
                              <img
                                src="https://cices.icmbpsgroup.com/speaker-and-committee_files/041d18b.jpg"
                                // style={{
                                //   marginBottom: "0px",
                                //   borderColor: "rgb(236, 226, 206)",
                                //   fontSize: "14px",
                                //   backgroundPosition: "0px 0px",
                                //   color: "rgb(69, 49, 34)",
                                //   boxSizing: "border-box",
                                //   textSizeAdjust: "100%",
                                //   position: "relative",
                                //   width: "176px",
                                // }}
                                className="age"

                              />{" "}
                              {/* <img
                                src="https://cices.icmbpsgroup.com/speaker-and-committee_files/ac.jpg"
                                style={{
                                  borderColor: "rgb(236, 226, 206)",
                                  fontSize: "12px",
                                  color: "rgb(69, 49, 34)",
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                  width: "205px",
                                }}
                              /> */}
                            </h2>
                            <h3>
                              <p className="speaker_text">
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; Thomas Wuerthinger
                                <br />
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp;University Of
                                Calgary&nbsp;&nbsp;
                                <br />
                                <span></span>
                                <span>
                                  Thomas Wuerthinger is a Senior Research
                                  Director at Oracle Labs leading programming
                                  language implementation teams for languages
                                  including Java, JavaScript, Ruby, and R. He is
                                  the architect of the Graal compiler and the
                                  Truffle self-optimizing runtime system.
                                </span>
                              </p>
                            </h3>
                            <h2>
                              <p>
                                <img src="https://cices.icmbpsgroup.com/speaker-and-committee_files/ac.jpg" />
                              </p>
                            </h2>
                            <h3 className="speaker_name">Andrew Vaughn</h3>
                            <h2>
                              <p className="speaker_name">
                                University Of Calgary
                              </p>
                              <p>
                                <img src="https://cices.icmbpsgroup.com/speaker-and-committee_files/add.jpg" 
                                                                className="age"
                                                                />
                              </p>
                            </h2>
                            <h3 className="speaker_name">Hamilton Lohan</h3>
                            <h2>
                              <p className="speaker_name">
                                University of Miami,
                                <br />
                                USA
                              </p>
                              <div>
                                <p>
                                  <img
                                    src="https://cices.icmbpsgroup.com/speaker-and-committee_files/ty.jpg"
                                    // style={{ height: "auto", width: "273px" }}
                                    className="age"

                                  />
                                </p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                              </div>
                            </h2>
                            <h3 className="speaker_name">Anne Bachmann</h3>
                            <h2>
                              <p></p>
                              <div>
                                <p className="speaker_name">
                                  University Of Calgary
                                </p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                              </div>
                            </h2>
                            <h2 className="speaker_name">Keynote Speaker</h2>
                            <h2>
                              <p></p>
                              <div>
                                <br />
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                              </div>
                            </h2>
                            <h3 className="speaker_name">Naresh Agarwal</h3>
                            <h2>
                              <p></p>
                              <div>
                                <div>
                                  <div>
                                    <div>
                                      <div>
                                        <div>
                                          <div>
                                            <p className="speaker_name">
                                              Simmons University,
                                              <br />
                                              USA
                                            </p>
                                            <p></p>
                                            <p></p>
                                            <p></p>
                                            <p></p>
                                            <p></p>
                                            <p></p>
                                            <p></p>
                                          </div>
                                          <p></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </h2>
                            <h4 className="speaker_name">Education</h4>
                            <h2>
                              <p></p>
                              <div>
                                <div>
                                  <div>
                                    <div>
                                      <div>
                                        <div>
                                          <div>
                                            <div>
                                              <div>
                                                <p className="speaker_name">
                                                  Ph.D.
                                                  <br />
                                                  National University of
                                                  Singapore, Singapore
                                                </p>
                                                <p className="speaker_name">
                                                  B.A.Sc.
                                                  <br />
                                                  Nanyang Technological
                                                  University, Singapore
                                                </p>
                                                <p></p>
                                                <p></p>
                                                <p></p>
                                                <p></p>
                                                <p></p>
                                                <p></p>
                                                <p></p>
                                              </div>
                                              <p></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </h2>
                            <h4 className="speaker_name">Research Areas</h4>
                            <h2>
                              <p></p>
                              <div>
                                <div>
                                  <p className="speaker_name">
                                    Information Behavior
                                    <br />
                                    Knowledge Management
                                  </p>
                                  <p>
                                    <br />
                                  </p>
                                  <p></p>
                                  <p></p>
                                  <p></p>
                                  <p></p>
                                  <p></p>
                                  <p></p>
                                  <p></p>
                                  <p></p>
                                </div>
                                <p></p>
                              </div>
                            </h2>
                          </div>
                        </div>
                        <div class="content_body_bg"></div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <Side />

          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Speaker;
import Side from "../components/Side";
import "../Styles/ColinBody.css";

function Contact() {
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
                  <section className="quick_edit_container">
                    <div id="content_headers">
                      <div id="content_headers_inner_1">
                        <div className="hgroup_outer">
                          <hgroup id="page_titles">
                            <div className="outer_title">
                              <h1 className="btt" style={{ fontSize: "1.6em" }}>
                                Contact Us{" "}
                              </h1>{" "}
                            </div>
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

                    <div className="content_body">
                      <div className="content_body_inner">
                        <div className="">
                          <div id="content_message">
                            <div class="content_message">
                              <p>
                                Complete the form below to request information
                                about the Canada International Conference On
                                Engineering and Sciences .<br />
                                We typically reply via email within 2 working
                                days.
                                <br />
                                For urgent inquiries contact the organizers
                                via&nbsp;call / whatsApp - +1 587 402 5051
                              </p>
                            </div>
                            <div class="content_headers" id="hr_div_sep"></div>
                          </div>

                          <form
                            accept-charset="UTF-8"
                            action="contact/send_message"
                            method="post"
                          >
                            <div
                              style={{
                                margin: "0",
                                padding: "0",
                                display: "inline",
                              }}
                            >
                              <input name="utf8" type="hidden" value="✓" />
                              <input
                                name="authenticity_token"
                                type="hidden"
                                value="VjUZZbwfJvrkUsseVGkA73MKTdyc3RC9Ve7v8icFf8s="
                              />
                            </div>

                            <table className="table">
                              <tbody>
                                <tr className="table_tr">
                                  <td className="col_1">
                                    <label className="col_label"> Email:</label>
                                  </td>
                                  <td >
                                    <span class="textbox" id="contact_email">
                                      <input className="email_input"
                                        id="submission_from"
                                        name="submission[from]"
                                        size="30"
                                        type="text"
                                      />
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="col_1">
                                    <label className="col_label">Subject:</label>
                                  </td>
                                  <td className="col2">
                                    <span class="textbox" id="contact_subject">
                                    <input className="email_input"
                                      
                                        id="submission_subject"
                                        name="submission[subject]"
                                        size="30"
                                        type="text"
                                      />
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="col1">
                                    <label className="col_label">Comments:</label>
                                  </td>
                                  <td class="col2">
                                    <span
                                      class="textarea"
                                      id="contact_comments"
                                    >
                                      <textarea className="email_input"

                                      
                                        cols="40"
                                        id="submission_message"
                                        name="submission[message]"
                                        rows="20"
                                      ></textarea>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td colspan="2">
                                    <div class="captcha1">
                                      <span class="button" id="contact_submit">
                                        <input className="col_input"
                                          name="commit"
                                          type="submit"
                                          value="Submit"
                                        />
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </form>
                        </div>
                      </div>
                      <div class="content_body_bg"></div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <Side />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
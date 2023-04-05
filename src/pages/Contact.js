import Side from "../components/Side";

function Contact() {
  return (
    <div>
      <Side />
      <div id="content" class=" page_header_fade_0">
        <div id="content_inner_1">
          <div id="main_content">
            <div id="main_content_bg"></div>
            <section id="quick_edit_container">
              <div id="content_headers">
                <div id="content_headers_inner_1">
                  <div class="hgroup_outer">
                    <hgroup id="page_titles">
                      <div class="outer_title">
                        <h1>contact Us</h1>
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

              <div class="content_body">
                <div class="content_body_inner_1">
                  <div class="content_body_inner_2">
                    <div id="content_message">
                      <div class="content_message">
                        <p>
                          Complete the form below to request information about
                          the Canada International Conference On Engineering and
                          Sciences .<br />
                          We typically reply via email within 2 working days.
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
                      <div style={{margin:"0",padding:"0",display:"inline"}}>
                        <input name="utf8" type="hidden" value="✓" />
                        <input
                          name="authenticity_token"
                          type="hidden"
                          value="VjUZZbwfJvrkUsseVGkA73MKTdyc3RC9Ve7v8icFf8s="
                        />
                      </div>

                      <table class="contact formtable">
                        <tbody>
                          <tr>
                            <td class="col1">
                              <label>Your Email:</label>
                            </td>
                            <td class="col2">
                              <span class="textbox" id="contact_email">
                                <input
                                  id="submission_from"
                                  name="submission[from]"
                                  size="30"
                                  type="text"
                                />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td class="col1">
                              <label>Subject:</label>
                            </td>
                            <td class="col2">
                              <span class="textbox" id="contact_subject">
                                <input
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
                              <label>Comments:</label>
                            </td>
                            <td class="col2">
                              <span class="textarea" id="contact_comments">
                                <textarea
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
                                  <input
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
    </div>
  );
}

export default Contact;
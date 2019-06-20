import React from "react";
import george from "../images/george.jpg";
import kelly from "../images/kelly_1.jpg";
import lauren from "../images/lauren.jpg";
import yasmine from "../images/yasmine.jpg";
const Counseling = () => {
  return (
    <React.Fragment>
      <section className="counseling container">
        <h3 className="center-align">Wave Counseling Page</h3>
        <br />
        <br />
        <section className="requests">
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    className="btn button waves-effect waves-light"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdTfJkzDP1vP-5fEs6rpFX-AMv22ta0GRXRwb_CdZ4cSpeAFA/viewform"
                  >
                    Request serivces
                  </a>
                </td>
                <td>
                  <p className="service_info">
                    ***This is for current WAVE students/families*** If you
                    would like to request a meeting with a counselor or social
                    worker click here. You will receive a reply within 24-72
                    hours. ​If this is an emergency please dial 9-1-1. You may
                    also call Washtenaw County Community Mental Health 24-hour
                    crisis line @ 734-544-3050
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    className="btn button waves-effect waves-light"
                    href="mailto: waveoffice@googlegroups.com"
                  >
                    Request Transcript
                  </a>
                </td>
                <td>
                  <p>PLEASE ALLOW 3-7 BUSINESS DAYS FOR PROCESSING</p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <br />
        <h3 className="center-align">Counseling</h3>
        <section className="advisors">
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    className="btn button"
                    href="mailto:gcafcalas@weocflex.org"
                  >
                    Email Me
                  </a>
                </td>
                <td>
                  <div>
                    <div className="card-panel grey lighten-5 z-depth-1">
                      <div className="row valign-wrapper">
                        <div className="col s2">
                          <img
                            src={george}
                            alt="george"
                            className="circle responsive-img"
                          />
                        </div>
                        <div className="col s10">
                          <h5>Advisor</h5>
                          <h6>George</h6>
                          <span className="black-text">
                            M.A. in School Counseling
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="btn button" href="mailto:kharris@weocflex.org">
                    Email Me
                  </a>
                </td>
                <td>
                  <div>
                    <div className="card-panel grey lighten-5 z-depth-1">
                      <div className="row valign-wrapper">
                        <div className="col s2">
                          <img
                            src={kelly}
                            alt="kelly"
                            className="circle responsive-img"
                          />
                        </div>
                        <div className="col s10">
                          <h5>Advisor</h5>
                          <h6>Kelly</h6>
                          <span className="black-text">
                            M.A. in School Counseling
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="btn button" href="mailto:lkeough@weocflex.org">
                    Email Me
                  </a>
                </td>
                <td>
                  <div>
                    <div className="card-panel grey lighten-5 z-depth-1">
                      <div className="row valign-wrapper">
                        <div className="col s2">
                          <img
                            src={lauren}
                            alt="lauren"
                            className="circle responsive-img"
                          />
                        </div>
                        <div className="col s10">
                          <h5>Advisor</h5>
                          <h6>Lauren</h6>
                          <span className="black-text">
                            M.A. in Social Work
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="btn button" href="mailto:ylennon@weocflex.org">
                    Email Me
                  </a>
                </td>
                <td>
                  <div>
                    <div className="card-panel grey lighten-5 z-depth-1">
                      <div className="row valign-wrapper">
                        <div className="col s2">
                          <img
                            src={yasmine}
                            alt="yasmine"
                            className="circle responsive-img"
                          />
                        </div>
                        <div className="col s10">
                          <h5>Student Coordinator</h5>
                          <h6>Yasmine</h6>
                          <span className="black-text">
                            M.A. in School Counseling
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className="divider" />
        <h3 className="center-align">Resources</h3>
        <section className="resources">
          <div className="community">
            <h6>Community Resoucres</h6>
            <ul>
              <li>
                <a href="https://drive.google.com/file/d/0BxVSPcaQuUWlS2RHV1VjQzZoT2M/view?usp=sharing">
                  Washtenaw County Agencies & Numbers
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/1DuaIU8Dn_o3fMb0rAB1zFewrc_InIW-WDoRzBR-E7dg/edit?usp=sharing">
                  Additional Agencies{" "}
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/0BwvafQ9dLbH4dlR6c3pJWndjZ1E/view?usp=sharing">
                  Food Pantry Information
                </a>
              </li>
              <li>
                <a href="http://umhs-rahs.org/rahs-health-centers/ypsilanti-community-high-school/">
                  Regional Alliance for Healthy Schools
                </a>
                @ Ypsilanti Community High School
              </li>
            </ul>
          </div>
          <div className="mental_health">
            <h6>Mental Health Resources</h6>
            <ul>
              <li>
                <a href="https://docs.google.com/document/d/1TpoISgtipWcUdZ2aSu8Z0tLb6vlV3k-fJ5th1jCbse4/edit?usp=sharing">
                  Washtenaw County List
                </a>
              </li>
              <li>
                <a href="https://www.med.umich.edu/socialwork/oda/docs/Grief%20and%20Bereavement%20Groups.pdf">
                  Grief & Bereavement Groups
                </a>
              </li>
            </ul>
          </div>
          <div className="college">
            <h6>College Resources</h6>
            <ul>
              <li>
                <a href="https://studentaid.ed.gov/sa/fafsa">
                  Free Application for Federal Student Aid (FAFSA)
                </a>
              </li>
              <li>
                <a href="https://studentaid.ed.gov/sa/sites/default/files/financial-aid-myths.pdf">
                  {" "}
                  Myths About Financial Aid{" "}
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/1ejBRL7MxrsrD4ILdYksLFzu0MHer9npko8kL1PzzgXo/edit?usp=sharing">
                  Scholarship Information
                </a>
              </li>
              <li>
                <a href="https://www.michigan.gov/mistudentaid/0,4636,7-128-60969_73336---,00.html">
                  MI Student Aid Portal
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1FiWkoeiCrvBRIyk9b6Vi1tzO7ztiUoom/view?usp=sharing">
                  Guide to Fee Waivers
                </a>
              </li>
              <li>
                <a href="https://www.collegeboard.org/">College Board</a>
                (SAT)
              </li>
            </ul>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Counseling;

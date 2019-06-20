import React from "react";
const Counseling = () => {
  return (
    <React.Fragment>
      <section className="counseling container">
        <h3 className="center-align">Wave Counseling Page</h3>
        <br></br>
        <br></br>
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
                  <a className="btn button waves-effect waves-light" href="mailto: waveoffice@googlegroups.com">
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
      </section>
    </React.Fragment>
  );
};

export default Counseling;

import React, { useState } from "react";
import "../styles/pages.scss";
const Admission = () => {
  const [state] = useState({
    enroll: [
      {
        id: 1,
        title: "Partner District Applications",
        content:
          "We have 420 total seats for Washtenaw County students residing in the school districts of  Ann Arbor, Chelsea, Dexter, Lincoln, Manchester, Milan, Saline, Whitmore Lake, and Ypsilanti.  The seats are proportionally distributed among the nine participating districts."
      },
      {
        id: 2,
        title: "Out-of-County Applications",
        content:
          "Students must first enroll directly in a Washtenaw County School District prior to submitting an application to WAVE."
      },
      {
        id: 3,
        title: "School of Choice Open Enrollment Dates",
        content:
          "To enroll as a School of Choice student, a student must apply during a district's open enrollment period. Once enrolled in a participating district, a student can then qualify for one of the district's slots in one of the programs operated by WEOC."
      }
    ],
    links: [
      {
        id: 1,
        school: "Ann Arbor Public Schools",
        link: "https://www.a2schools.org/"
      },
      {
        id: 2,
        school: "Chelsea Public Schools",
        link:
          "https://www.chelsea.k12.mi.us/education/district/district.php?sectionid=1"
      },
      {
        id: 3,
        school: "Dexter Community Schools",
        link: "https://www.dexterschools.org/"
      },
      {
        id: 4,
        school: "Lincoln Consolidated Schools",
        link: "https://www.lincolnk12.org/"
      },
      {
        id: 5,
        school: "Manchester Community Schools",
        link:
          "http://www.mcs.k12.mi.us/education/district/district.php?sectionid=1"
      },
      {
        id: 6,
        school: "Manchester Community Schools",
        link:
          "http://www.mcs.k12.mi.us/education/district/district.php?sectionid=1"
      },
      {
        id: 7,
        school: "Milan Public Schools",
        link: "https://www.milanareaschools.org/"
      },
      {
        id: 8,
        school: "Saline Area Schools",
        link: "https://www.salineschools.org/"
      },
      {
        id: 9,
        school: "Washtenaw Intermediate School District",
        link: "https://washtenawisd.org/"
      },
      {
        id: 10,
        school: "Whitmore Lake Public Schools",
        link: "https://www.wlps.net/"
      },
      {
        id: 11,
        school: "Ypsilanti Community Schools ",
        link: "https://www.ycschools.us/"
      }
    ]
  });
  return (
    <React.Fragment>
      <section className="admission_wrapper">
        <section className="admission_section row">
          <div className="admission_title">
            <h3 className="center-align">Admission Information</h3>
            <h6 className="center-align">
              *Applications to the Washtenaw Alliance for Virtual Education are
              accepted on a rolling basis.*
            </h6>
          </div>
          <br />
          <div className="admission_content blue-grey lighten-5">
            <div className="admission_right">
              {state.enroll.map(info => {
                return (
                  <div key={info.id}>
                    <h5>{info.title}</h5>
                    <p>{info.content}</p>
                  </div>
                );
              })}
            </div>
            <div className="divider hide-on-med-and-up" />
            <div className="admission_left">
              <h6>
                Washtenaw Alliance for Virtual Education <br />
                is made possible by the following partnerships:
              </h6>
              {state.links.map(link => {
                return (
                  <div key={link.id}>
                    <p>
                      <a href={link.link}>{link.school}</a>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="application_section row blue-grey lighten-4">
          <div className="application_question">
            <div className="question_box">
              <h3>APPLICATION / INTEREST FORM</h3>
              <p>
                Please complete each field below with your student's
                information. Click Submit at the bottom of the form when
                complete. Office staff will call to discuss your interest in 5-7
                business days. Admissions are on a rolling basis dependent upon
                the number of seats available in the program for each
                participating district.
              </p>
              <a
                href="mailto:ylennon@weocflex.org"
                className="btn grey black-text lighten-2"
              >
                Email for questions
              </a>
            </div>
          </div>
          <div className="question_button">
            <a href="mailto:ylennon@weocflex.org" className="btn btn-small">
              Email for questions
            </a>
          </div>
          <div className="application_form">
            <iframe
              className="form"
              title="Wave Refferal"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdpQiGJDTqMwEqZ14SSbMgH7YJDnRk_zSaqvJ8jgfi46U1sKg/viewform?embedded=true"
              width="640"
              height="1000"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading...
            </iframe>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Admission;

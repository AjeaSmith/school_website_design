import React, { Component } from "react";
import M from "materialize-css";
import boy2 from "../images/boy2.jpg";
import boy3 from "../images/boy3.jpg";
import girl1 from "../images/girl1.jpg";
import { Link } from "react-router-dom";
import "../styles/App.scss";
class Home extends Component {
  state = {
    slides: [
      {
        id: 1,
        img: girl1,
        caption: "WELCOME",
        slogan:
          "301 West Michigan Avenue Suite 201 Ypsilanti, MI 48197 Phone: 734-761-7027 Fax: 734-483-1464"
      },
      {
        id: 2,
        img: boy2,
        caption: "Enroll now! It's free",
        slogan: (
          <Link to="/Admission" className="blue-text text-accent-4">
            Application Link
          </Link>
        )
      },
      {
        id: 3,
        img: boy3,
        caption: (
          <div>
            Meet our{" "}
            <Link to="/Curriculum" className="blue-text text-accent-4">
              staff
            </Link>
          </div>
        ),
        slogan: "Friendly. Supportive. Dedicated."
      }
    ]
  };
  componentDidMount() {
    const slider = document.querySelectorAll(".slider");
    M.Slider.init(slider, {});
  }
  render() {
    const { slides } = this.state;
    return (
      <React.Fragment>
        <section className="slider hide-on-small-only">
          <ul className="slides">
            {slides.map(slide => {
              return (
                <li key={slide.id}>
                  <img src={slide.img} alt="students" />
                  <div className="caption center-align">
                    <h3>{slide.caption}</h3>
                    <h5 className="light grey-text text-lighten-3">
                      {slide.slogan}
                    </h5>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="welcome">
          <div className="welcome_header">
            <h2 className="center-align">About our school</h2>
          </div>
          <div className="welcome_text">
            <p>
              The Washtenaw Alliance for Virtual Education is a free, public
              high school program for students in Washtenaw County school
              districts. The program offers a flexible, student-centered,
              project-based approach to learning for students who need an
              alternative to the traditional high school model. Support is
              provided through an advisory teacher and online content support
              teachers. Staff work together to design and administer an academic
              program that meets the state standards and prepares each student
              for further education and career skills. We care deeply about each
              student's education and success, and want to ensure EVERY
              opportunity available to complete a high school education and be
              prepared for the next steps in life. The Washtenaw Alliance for
              Virtual Education is available as part of local Washtenaw public
              school districts' participation in the Washtenaw Educational
              Options Consortium. Washtenaw Alliance is one of the anchor
              programs designed for students seeking a non-traditional high
              school education experience, through their home school district.
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Home;

import React from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import "../styles/pages.scss";
const Curriculum = () => {
  return (
    <React.Fragment>
      <section className="curriculum_section">
        <div className="images">
          <div className="image image1">
            <img src={image1} alt="student1" width="200" />
          </div>
          <div className="image image2">
            <img src={image2} alt="student1" width="200" />
          </div>
          <div className="image image3">
            <img src={image3} alt="student3" width="200" />
          </div>
        </div>
        <div className="curriculum_info">
          <div className="info_left">
            <h5>Key Elements</h5>
            <ul>
              <li>* Year-round, individualized programming</li>
              <li>* Learning community both online and in person</li>
              <li>* Strong instructor and student relationships and culture</li>
              <li>* Highly individualized curriculum pacing and planning</li>
              <li>
                * Each student is equipped with a computer workstation and
                internet connectivity in their home, <br />
                and must schedule classroom time a minimum of two days a week.
              </li>
            </ul>
          </div>
          <div className="info_right">
            <h5>The Learning Environment</h5>
            <ul>
              <li>
                *{" "}
                <a href="https://edu.google.com/?modal_active=none">
                  Google Apps for Education
                </a>{" "}
                for communication and collaboration
              </li>
              <li>
                *{" "}
                <a href="https://www.powerschool.com/solutions/unified-classroom/learning/">
                  Powerschool Learning Management System
                </a>
                with standards based grading
              </li>
              <li>
                * Individualized and interdiscipinary learning materials aligned
                with county wide initiatives such as <br />
                adolescent literacy supports and Assessment Literacy
              </li>
              <li>
                * Nationally recognized offerings such as{" "}
                <a href="https://school.bighistoryproject.com/bhplive">
                  {" "}
                  Big History Project
                </a>
                (Gates Foundation initiative) and others
              </li>
              <li>
                * Scheduled, consistent on-site time with curriculum support for
                all{" "}
                <a href="https://www.michigan.gov/mde/0,4615,7-140-28753_38924---,00.html">
                  Michigan Merit Curriculum
                </a>{" "}
                content areas
              </li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Curriculum;

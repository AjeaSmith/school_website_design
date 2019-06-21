import React from "react";
import student from "../images/anotherstudent.jpg";

const Student = () => {
  return (
    <React.Fragment>
      <section className="student_section">
        <h3 className="center-align">Student life</h3>
        <br></br>
        <section className="student_container container">
          <div className="student_top">
            <div className="image">
              <img src={student} alt="student"/>
            </div>
            <div>
              <p>
                <b>A day in the life of a Washtenaw Alliance for Virtual Education
                student:</b> Meet with my advisor at lab to talk about which class I
                will begin next. Attend a workshop on Chemistry - hands on lab
                today with only 2 other students Ask for help in lab to finish
                my experiment write up. Hand it in for English and Chemistry.
                Head home and to work my late afternoon shift. Get online in the
                evening for office hours with an online content coach to get
                help with math.
              </p>
            </div>
          </div>
          <div className="student_bottom">
            <div className="testimonials">
              <blockquote>
                "Teachers are really into helping you, even if they are not the
                regular teachers for that subject. Very cool that you can earn
                credit in multiple areas, and it is flexible with your schedule.
                The staff is very supportive with everything, school and life."
                -Olivia
              </blockquote>
            </div>
            <div className="testimonials">
              <blockquote>
                "If you have a child it is a good program because you can work
                and do school at the time same. You are able to take care of
                your responsibilities and get your education at the same time.
                The teachers are very helpful and understanding. The work is
                hard, but if you are a hard worker and ask for help you can do
                it." -Eva{" "}
              </blockquote>
            </div>
            <div className="testimonials">
              <blockquote>
                "It's flexible. You get to be independent. The advisors know
                you. You're not in a group of kids you don't want to be with,
                and you can go at your own pace." -Brandon
              </blockquote>
            </div>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Student;

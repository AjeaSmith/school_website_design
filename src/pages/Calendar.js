import React, { useState } from "react";

const Calendar = () => {
  const [state] = useState({
    dates: [
      {
        id: 1,
        para:
          "The 2018-19 school calendar runs from September 4, 2018 - August 31, 2019."
      },
      {
        id: 2,
        para:
          "Winter and spring breaks are determined by a county-wide calendar. These dates for 2018/19 will be:"
      },
      {
        id: 3,
        heading: "Winter Break ",
        para:
          "School closes at the end of the day on Friday, December 21,2018 Classes resume on Tuesday, January 8, 2018"
      },
      {
        id: 4,
        heading: "SpringBreak",
        para:
          "School closes at the end of the day on Friday, March 22, 2018 Classes resume on Tuesday, April 2, 2018"
      },
      {
        id: 5,
        heading: "AADL Lab Schedule",
        para: "Tuesday 9:30AM-2:30PM Thursday 9:30AM-2:30PM"
      },
      {
        id: 6,
        heading: "Ypsilanti Lab Schedule",
        para:
          "Tuesday 9AM-3PM Wednesday 9AM-3PM Thursday 9AM-3PM​ Friday 9AM-3PM"
      }
    ]
  });
  return (
    <React.Fragment>
      <section className="calendar_section">
        <h2 className="center-align">Calendar</h2>
        <div className="calendar_wrapper">
          <section className="calendar_dates">
            <section className="dates">
              {state.dates.map(date => {
                return (
                  <div className="date" key={date.id}>
                    <h6>{date.heading}</h6>
                    <p>{date.para}</p>
                  </div>
                );
              })}
            </section>
          </section>
          <section className="calendar">
            <iframe
              title="calendar"
              src="https://calendar.google.com/calendar/embed?src=weocflex.org_u141hjg43dt61s1ob6hdtkalo4%40group.calendar.google.com&ctz=America%2FDetroit"
              style={{ border: 0 }}
              width="600"
              height="600"
              frameBorder="0"
              scrolling="no"
            />
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Calendar;

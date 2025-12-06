import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { verses } from "./Verse";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default function Calendar() {
  const [month, setMonth] = useState((m) =>
    typeof m === "number" ? m : new Date().getMonth()
  );
  const [year, setYear] = useState((y) =>
    typeof y === "number" ? y : new Date().getFullYear()
  );
      const curr = new Date();
  const currDate = curr.getDate();
  const currMon = curr.getMonth();
  const createCalendarMatrix = (year, mon) => {
    /*
        [
        [null,null,1,2,3,4,5]
        [6,7,8,9,10,11,12],
        [13,14,15,16,17,18,19],
        [20,21,22,23,24,25,26],
        [27,28,29,30,null,null,null]
        ]
        */

    const y = year;
    const m = mon;

    const totalDaysInMonth = new Date(y, m + 1, 0).getDate();
    const initialDayOfMonth = new Date(y, m + 1, 1).getDay();

    const monthMatrix = [];
    let weeks = Array(7).fill(null);
    let dateCounter = 1;

    for (let i = initialDayOfMonth; i < 7; i++) {
      weeks[i] = dateCounter;
      dateCounter++;
    }

    monthMatrix.push(weeks);
    while (dateCounter < totalDaysInMonth) {
      weeks = Array(7).fill(null);
      for (let i = 0; i < 7; i++) {
        weeks[i] = dateCounter <= totalDaysInMonth ? dateCounter : null;
        dateCounter++;
      }
      monthMatrix.push(weeks);
    }
    return monthMatrix;
  };
  const CalendarMatrix = createCalendarMatrix(year, month);

  const prevMonthBtn = () => {
    setMonth((prevM) => (prevM === 0 ? 11 : prevM - 1));
    setYear((prevY) => (month === 0 ? prevY - 1 : prevY));
  };
  const nxtMonthBtn = () => {
    setMonth((prevM) => (prevM === 11 ? 0 : prevM + 1));
    setYear((prevY) => (month === 11 ? prevY + 1 : prevY));
  };

  return (
    <div className="calendar-box">
      <header>
        <h3>
          {year} {months[month]}{" "}
        </h3>
        <button
          style={{
            border: "none",
            backgroundColor: "rgba(255, 188,27)",
            borderRadius: "5px",
            padding: "5px",
            margin: "2px",
          }}
          onClick={prevMonthBtn}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          style={{
            border: "none",
            backgroundColor: "rgba(255, 188,27)",
            borderRadius: "5px",
            padding: "5px",
            margin: "2px",
          }}
          onClick={nxtMonthBtn}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </header>
      <table className="table">
        <thead className="tHead">
          <tr>
            {days.map((d) => (
              <th>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CalendarMatrix.map((m) => {
            return (
              <tr>
                {m.map((d) => (
                  
                   <td className={month === currMon && currDate === d ? "today" : ""}>
                      <b> {d} </b>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

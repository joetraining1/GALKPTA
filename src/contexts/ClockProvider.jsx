import React, { createContext, useEffect, useState } from "react";

export const ClockContext = createContext({});

const ClockProvider = ({ children }) => {
  const [hourDigital, setHourDigital] = useState("");
  const [minutesDigital, setMinutesDigital] = useState("");
  const [amPm, setAmPm] = useState("");
  const [dayNow, setDayNow] = useState("");
  const [monthNow, setMonthNow] = useState("");
  const [yearNow, setYearNow] = useState("");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    setInterval(() => {
      const date = new Date();

      let theHour = date.getHours();
      let theMinute = date.getMinutes();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      let ampm;

      if (theHour >= 12) {
        theHour = theHour - 12;
        ampm = "PM";
      } else {
        ampm = "AM";
      }

      if (theHour === 0) theHour = 12;
      if (theHour < 10) theHour = `0${theHour}`;
      if (theMinute < 10) theMinute = `0${theMinute}`;

      setHourDigital(theHour);
      setMinutesDigital(theMinute);
      setAmPm(ampm);
      setDayNow(day);
      setMonthNow(months[month]);
      setYearNow(year);
    }, 1000);
  }, []);

  return (
    <ClockContext.Provider
      value={{
        hourDigital,
        minutesDigital,
        amPm,
        dayNow,
        monthNow,
        yearNow,
      }}
    >
      {children}
    </ClockContext.Provider>
  );
};

export default ClockProvider;

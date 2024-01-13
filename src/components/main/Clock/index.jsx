import React, { useEffect, useState } from "react";
import ClockProvider from "../../../contexts/ClockProvider";
import { useMediaQuery } from "react-responsive";
import { Typography } from "@mui/material";
import AnalogClock from "analog-clock-react";

const MainClock = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [seconds, setSeconds] = useState();

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
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

  const initState = () => {
    const atDate = new Date();
    const atMonth = atDate.getMonth();
    setDay(atDate.getDate());
    setMonth(months[atMonth]);
    setYear(atDate.getFullYear());
    setHour(atDate.getHours());
    setMinute(atDate.getMinutes());
    setSeconds(atDate.getSeconds());
    return;
  };

  const ClockProps = {
    width: isMobile ? "50vw" : "10vw",
    border: "true",
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#d81c7a",
      minute: "#fff",
      hour: "#fff",
    },
  };

  useEffect(() => {
    initState();
    setInterval(() => {
      let theDate = new Date();
      let theMonth = theDate.getMonth();

      if (theMonth === month) {
        return null;
      } else {
        setMonth(months[theMonth]);
      }

      setDay(theDate.getDate());
      setYear(theDate.getFullYear());
      setHour(theDate.getHours());
      setMinute(theDate.getMinutes());
      setSeconds(theDate.getSeconds());
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      <ClockProvider>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: '2vh'
          }}
        >
          <span
            style={{
              fontSize: "1.2em",
              fontFamily: "Poppins, sans-serif",
            }}
          >{`${day} ${month} ${year}`}</span>
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >{`${hour < 10 ? "0".concat(hour) : hour} : ${minute < 10 ? "0".concat(minute) : minute} : ${
            seconds < 10 ? "0".concat(seconds) : seconds
          }`}</span>
        </Typography>
      </ClockProvider>
      <AnalogClock {...ClockProps} />
    </React.Fragment>
  );
};

export default MainClock;

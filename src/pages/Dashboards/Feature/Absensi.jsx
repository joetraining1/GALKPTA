import React, { useEffect, useState } from "react";
import ClockProvider from "../../../contexts/ClockProvider";
import { Button, Card, Typography } from "@mui/material";
import AnalogClock from "analog-clock-react";
import { useMediaQuery } from "react-responsive";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import InteractionPlugin from "@fullcalendar/interaction";
import ListPlugin from "@fullcalendar/list";
import useNotif from "../../../hooks/useNotif";

const Absensi = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [seconds, setSeconds] = useState();
  const [absen, setAbsen] = useState(false);

  const { toastInfo } = useNotif();

  const [uAttendRecord, setUrecord] = useState([
    {
      title: "ON TIME",
      date: "2023-05-01",
    },
  ]);

  const initState = () => {
    const atDate = new Date();
    setDay(atDate.getDate());
    return;
  };

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

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

  const handleAbsen = async() => {
    const theRecord = new Date();
    const year = theRecord.toLocaleString("default", { year: "numeric" });
    const month = theRecord.toLocaleString("default", { month: "2-digit" });
    const day = theRecord.toLocaleString("default", { day: "2-digit" });
    // const onTheDate = theRecord.toLocaleDateString().replace(/\//g, "-");
    const onTheDate = year + "-" + month + "-" + day;
    const filterNewDate = uAttendRecord.find((item) => item.date === onTheDate);

    const theRecordTime =
      `${
        theRecord.getHours() < 10
          ? `0${theRecord.getHours()}`
          : theRecord.getHours()
      }` +
      ":" +
      `${
        theRecord.getMinutes() < 10
          ? `0${theRecord.getMinutes()}`
          : theRecord.getMinutes()
      }`;
    if (filterNewDate === undefined) {
      const newRecord = {
        title: "LATE".concat(` ${theRecordTime}`),
        date: onTheDate,
      };
      const addOnRecord = [...uAttendRecord, newRecord];
      setUrecord(addOnRecord);
      return;
    } else {
      toastInfo("Absen sudah tercetak.");
      return;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "fit-content",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1vw",
        flex: "wrap",
        marginBottom: "3vw",
        background: '#fff',
      }}
    >
      <ClockProvider>
        <Typography variant="h4">
          <span>{day}</span>
          <span>{month}</span>
          <span>{year}</span>
          <br />
          <span>{hour}:</span>
          <span>{minute}:</span>
          <span>{seconds}</span>
        </Typography>
      </ClockProvider>
      <AnalogClock {...ClockProps} />
      <Button
        variant="contained"
        onClick={() => handleAbsen()}
        disabled={absen}
      >
        Absen
      </Button>
      <Card
        sx={{
          height: isMobile ? "75svh" : "85svh",
          width: "95%",
          padding: "1vw",
        }}
      >
        {isMobile ? (
          <FullCalendar
            height="100%"
            plugins={[ListPlugin, InteractionPlugin]}
            events={uAttendRecord}
            initialView="listWeek"
          />
        ) : null}
        {isMobile ? null : (
          <FullCalendar
            height="100%"
            plugins={[dayGridPlugin, InteractionPlugin]}
            events={uAttendRecord}
            initialView="dayGridMonth"
            weekends={false}
          />
        )}
      </Card>
    </div>
  );
};

export default Absensi;

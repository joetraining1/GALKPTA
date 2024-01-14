import React, { useEffect, useState } from "react";
import ClockProvider from "../../../contexts/ClockProvider";
import { Button, Card, Paper, Typography } from "@mui/material";
import AnalogClock from "analog-clock-react";
import { useMediaQuery } from "react-responsive";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import InteractionPlugin from "@fullcalendar/interaction";
import ListPlugin from "@fullcalendar/list";
import useNotif from "../../../hooks/useNotif";
import ApiClient from "../../../utils/ApiClient";
import MainClock from "../../../components/main/Clock";
import ContentHead from "../../../components/main/Content/MainContent/ContentHead";
import Dropdown from "../../../components/global/Dropdown/Dropdown";

const Absensi = () => {
  const [absen, setAbsen] = useState(false);

  const { infoToast, updateToast } = useNotif();

  const [uAttendRecord, setUrecord] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const handleAbsen = async () => {
    setIsLoading(true);
    infoToast("mengirim absen..");
    try {
      await ApiClient.post("/attendance").then((response) => {
        if (response.data.status === "fail") {
          updateToast(`Absen gagal. ${response.data.message}`, "error");
          setIsLoading(false);
          return;
        }
        updateToast("Absen berhasil.", "success");
        setIsLoading(false);
        return;
      });
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        eject();
        infoToast("Session Expired. Silahkan login kembali.");
        return;
      }
      setIsLoading(false);
      updateToast("Absen gagal. coba lagi", "error");
      return;
    }
  };

  const getAttendances = async () => {
    setIsLoading(true);
    try {
      await ApiClient.get("/attendance").then((response) => {
        const data = response.data.result;
        const orgData = data.map((item) => {
          const upDate = item.created_at;
          const sliceDate = upDate.slice(0, 10);
          const sliceTime = upDate.slice(11, 19);
          return {
            id: item.id,
            title: `${item.title} ${sliceTime}`,
            date: sliceDate,
          };
        });
        setUrecord(orgData);
      });
      setIsLoading(false);
      return;
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        eject();
        infoToast("Session Expired. Silahkan login kembali.");
        return;
      }
      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    getAttendances();
    return;
  }, []);

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
        paddingBottom: "2vw",
        backgroundColor: "#EEF0F2",
      }}
    >
      <ContentHead
        styles={{
          height: isMobile ? "30svh" : "10svh",
          width: "100%",
          padding: "1vw",
          display: "flex",
          flexDirection: "column",
          flex: "wrap",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "#fff",
            height: "10vh",
            borderRadius: "0.1vw",
            boxShadow: "2px 2px 5px 1px rgba(0,0,0, 0.25)",
            padding: "1vw 2vw",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontFamily: "Poppins, sans-serif",
              fontSize: "1.4em",
            }}
          >
            Absensi Pegawai
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontFamily: "Poppins, sans-serif",
              color: "grey",
              fontSize: "0.7em",
              paddingLeft: "1vw",
            }}
          >
            Sistem Pekerja Terpadu CV. Karya Abadi
          </Typography>
        </div>
      </ContentHead>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "fit-content",
          padding: "1vw",
        }}
      >
        <Dropdown
          title={"Harap Dibaca"}
          exclaim={"Tata Tertib dan Regulasi Perusahaan terkait dengan Absensi"}
        >
          <Typography
            variant="body2"
            sx={{ padding: "1vw", textAlign: "justify" }}
          >
            Pegawai diharapkan absen sebelum jam 08.00 WIB pagi dari hari senin
            hingga jumat. Diatas waktu yang telah ditentukan, absen akan
            dikategorikan sebagai terlambat, sehingga pegawai harus memberikan
            keterangan dengan mengirimkan pesan menggunakan aplikasi perusahaan.
            Absen tidak dapat dilakukan jika dilakukan lebih dari pukul 16.00
            WIB.
          </Typography>
        </Dropdown>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "fit-content",
          padding: "1vw 2vw",
          gap : '1vw'
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            height: "fit-content",
            padding: "2vw 1vw",
            alignItems: 'center'
          }}
        >
          <MainClock />
          <Button
            variant="contained"
            onClick={() => handleAbsen()}
            disabled={absen || isLoading}
            sx={{
              margin: isMobile ? "5vh 0" : "3vh auto",
              width: isMobile ? "40%" : "8vw",
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Absen
          </Button>
        </Paper>
        <div style={{
          display: 'flex',
          width: '100%',
          height: 'fit-content',
          
        }}>
        <Dropdown
          title={"Pengumuman"}
          exclaim={"Selamat Tahun Baru"}
        >
          <Typography
            variant="body2"
            sx={{ padding: "1vw", textAlign: "justify", fontFamily: 'Poppins, sans-serif' }}
          >
            Pegawai diharapkan absen sebelum jam 08.00 WIB pagi dari hari senin
            hingga jumat. Diatas waktu yang telah ditentukan, absen akan
            dikategorikan sebagai terlambat, sehingga pegawai harus memberikan
            keterangan dengan mengirimkan pesan menggunakan aplikasi perusahaan.
            Absen tidak dapat dilakukan jika dilakukan lebih dari pukul 16.00
            WIB.
          </Typography>
        </Dropdown>
        </div>
      </div>
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

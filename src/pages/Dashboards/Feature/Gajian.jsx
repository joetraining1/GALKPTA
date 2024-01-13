import { Typography } from "@mui/material";
import React from "react";

const Gajian = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "100%",
        height: "fit-content",
        padding: "1vw",
        backgroundColor: "#EEF0F2",
        gap: "1vh",
        transition: "all 0.5s ease",
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
          Layanan Laporan Gajian
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
    </div>
  );
};

export default Gajian;

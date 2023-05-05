import { Divider, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "react-responsive";
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import PhoneForwardedRoundedIcon from '@mui/icons-material/PhoneForwardedRounded';

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  return (
    <div
      style={{
        width: "100%",
        height: isMobile ? "60svh" : "30svh",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        justifyContent: "space-evenly",
        flex: "wrap",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "0.85svh",
          background: "#C3C9E9",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "15%",
            height: "100%",
            background: "#F5D547",
            marginRight: "40%",
          }}
        ></div>
        <div
          style={{ width: "15%", height: "100%", background: "#2292A4" }}
        ></div>
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          padding: "1vw",
          display: "flex",
          flexDirection: "column",
          flex: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "space-evenly",
            gap: "1vw",
          }}
        >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
          width: '100%'
        }}>
        <AirplaneTicketOutlinedIcon sx={{
          fontSize: '3vw',
          color: 'purple'
        }}/>
        <Divider />
        Site Link
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
          width: '100%'
        }}>
        <AirplaneTicketOutlinedIcon sx={{
          fontSize: '3vw',
          color: 'purple'
        }}/>
        <Divider />
        Site Link
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
          width: '100%'
        }}>
        <AirplaneTicketOutlinedIcon sx={{
          fontSize: '3vw',
          color: 'purple'
        }}/>
        <Divider />
        Site Link
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
          width: '100%'
        }}>
        About
        <Divider />
        Site Link
        </div>
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "20%",
            justifyContent: "center",
            padding: "0.5%",
          }}
        >
          <div>© Copyright 2023 CV. Karya Abadi. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

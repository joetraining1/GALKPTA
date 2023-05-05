import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ContentBody from "../../components/main/Content/MainContent/ContentBody";
import ContentHead from "../../components/main/Content/MainContent/ContentHead";
import { Typography } from "@mui/material";

const Dashboard = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <ContentBody
      divStyle={{
        height: "fit-content",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "1vw",
        justifyContent: "center",
        gap: "1vw",
      }}
    >
      <ContentHead styles={{
        display: 'flex',
        height: 'fit-content',
        width: '100%',
        flexDirection: 'column'
      }}>
        <Typography variant="h3" sx={{ fontWeight: "600", color: "2A2B2A" }}>
          Home
        </Typography>
      </ContentHead>
      <div style={{
        height: 'fit-content',
        dislpay: 'flex',
        width: '100%',
        flex: 'wrap',
      }}>
      
      </div>
    </ContentBody>
  );
};

export default Dashboard;

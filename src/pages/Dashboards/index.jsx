import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ContentBody from "../../components/main/Content/MainContent/ContentBody";
import ContentHead from "../../components/main/Content/MainContent/ContentHead";
import { Typography } from "@mui/material";
import ContentTitle from "../../components/main/Content/MainContent/ContentTitle";
import Bg from '../../assets/vacay.jpg';

const Dashboard = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <ContentBody
      divStyle={{
        height: "fit-content",
        minHeight: '63svh',
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "1vw",
        justifyContent: "flex-start",
        gap: "1vw",
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <ContentHead styles={{
        display: 'flex',
        height: 'fit-content',
        width: '100%',
        flexDirection: 'column'
      }}>
        <ContentTitle cTitle={"Halaman Utama"}/>
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

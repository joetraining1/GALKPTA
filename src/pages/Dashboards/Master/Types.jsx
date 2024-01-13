import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Box, Button, Card, Grow, Pagination, Typography } from "@mui/material";
import WP from "../../../assets/comp-bdg.jpg";
import Modals from "../../../components/global/Modal";
import ContentBody from "../../../components/main/Content/MainContent/ContentBody";
import NonPaged from "../../../components/main/MultiContent/NonPaged";
import PagedContent from "../../../components/main/MultiContent/PagedContent";
import ContentTitle from "../../../components/main/Content/MainContent/ContentTitle";

const Types = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const [data, setData] = useState([...Array(12)]);
  const [pageActive, setPageActive] = useState(0);

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: 'fit-content',
      minHeight: '63svh',
      padding: '1vw',
      flexDirection: 'column',
      backgroundColor: "#EEF0F2",
      gap: '1vw'
    }}>
    <ContentTitle cTitle={"Kelola Data Internal Tipe Akun"}/>
    <ContentBody
      divStyle={{
        height: "fit-content",
        width: "100%",
        display: data.length < 11 ? "grid" : "flex",
        placeItems: data.length < 11 ? "center" : null,
        gridTemplateColumns:
          data.length < 11 ? `repeat(${isMobile ? 1 : 2}, 1fr)` : null,
        flexDirection: data.length < 11 ? null : "column",
        alignItems: data.length < 11 ? null : "center",
        padding: "1vw",
        gap: isMobile ? "2vh" : "1vw",
        marginBottom: "2vh",
      }}
    >
      {data.length < 11 ? (
        <NonPaged pData={data} />
      ) : (
        <PagedContent pData={data} />
      )}
      <Modals
        bText="+Tambah tipe"
        bStyle={{
          height: "5svh",
          width: isMobile ? "90%" : "30%",
        }}
        mTitle="Tambah Data Type"
        fStyle="level1"
      />
    </ContentBody>
    </div>
  );
};

export default Types;

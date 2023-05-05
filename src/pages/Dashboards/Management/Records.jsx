import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ContentHead from "../../../components/main/Content/MainContent/ContentHead";
import { Typography } from "@mui/material";
import ContentBody from "../../../components/main/Content/MainContent/ContentBody";
import Table1 from "../../../components/parts/Tables/Table1";
import ApiClient from "../../../utils/ApiClient";

const Records = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const [recordData, setRecord] = useState([]);

  const column = useMemo(() => {
    if(recordData.length === 0){
      return []
    }

    return [
      {
        field: "id",
        headerName: "No.",
      },
      {
        field: "name",
        headerName: "Nama Pegawai",
        flex: 1,
      },
      {
        field: "title",
        headerName: "Status",
        flex: 1,
      },
      {
        field: "created_at",
        headerName: "Catatan Waktu",
        flex: 1,
      },
    ];
  }, [recordData])

  const getAttendances = async () => {
    await ApiClient.get("/attendances").then((response) => {
      // console.log(response.data.result);
      setRecord(response.data.result);
    });
    return;
  };

  useEffect(() => {
    getAttendances();
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
        marginBottom: "3vw",
        background: "#fff",
      }}
    >
      <ContentHead
        styles={{
          height: "20svh",
          width: "100%",
        }}
      >
        <Typography variant="h3">Catatan Absen</Typography>
      </ContentHead>
      <ContentBody
        divStyle={{
          height: "fit-content",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "1vw",
          justifyContent: "center",
          alignItems: isMobile ? "center" : null,
          gap: isMobile ? "3vw" : "1vw",
          flex: "wrap",
          overflow: 'auto'
        }}
      >
        <Table1 rows={recordData} column={column} />
      </ContentBody>
    </div>
  );
};

export default Records;

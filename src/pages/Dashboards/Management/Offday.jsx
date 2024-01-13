import React, { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ContentHead from "../../../components/main/Content/MainContent/ContentHead";
import { Typography } from "@mui/material";
import ContentBody from "../../../components/main/Content/MainContent/ContentBody";
import Table1 from "../../../components/parts/Tables/Table1";
import ApiClient from "../../../utils/ApiClient";
import Modals from "../../../components/global/Modal";
import useNotif from "../../../hooks/useNotif";
import useAuth from "../../../hooks/useAuth";
import ContentTitle from "../../../components/main/Content/MainContent/ContentTitle";

const Offday = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const { infoToast, updateToast } = useNotif();
  const { eject } = useAuth();

  const [recordData, setRecord] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAttendances = async () => {
    setIsLoading(true);
    try {
      await ApiClient.get("/attendances").then((response) => {
        // console.log(response.data.result);
        setRecord(response.data.result);
      });
      setIsLoading(false);
      return;
    } catch (error) {
      console.log(error);
      if(error.status === 401){
        eject()
        infoToast('Session Expired. Silahkan login kembali.')
        return
      }
      setIsLoading(false);
      return;
    }
  };

  const handleDelete = async(id) => {
    setIsLoading(true)
    infoToast('menghapus record..')
    try{
      await ApiClient.delete(`/attendances/${id}`).then((response) => {
        setIsLoading(false)
        updateToast('Data berhasil dihapus.', 'success')
        getAttendances()
      })
      return
    }catch(error){
      console.log(error)
      setIsLoading(false)
      updateToast('Gagal menghapus data.', 'error')
      return
    }
  }

  const column = useMemo(() => {
    if (recordData.length === 0) {
      return [];
    }

    return [
      {
        field: "id",
        headerName: "No.",
        filterable: false,
        renderCell: (params) =>
          params.api.getRowIndexRelativeToVisibleRows(params.row.id) + 1,
      },
      {
        field: "name",
        headerName: "Nama Pegawai",
        width: 150,
      },
      {
        field: "title",
        headerName: "Status",
        width: 125,
      },
      {
        field: "created_at",
        headerName: "Catatan Waktu",
        width: 200,
      },
      {
        field: "option",
        headerName: "Option",
        flex: isMobile ? null : 1,
        width: isMobile ? 250 : null,
        renderCell: ({ row: { id, name } }) => {
          return <Modals bText="delete" mTitle={name} funct={() => handleDelete(id)} fStyle='level2'/>;
        },
      },
    ];
  }, [recordData]);


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
        // background: "#fff",
        backgroundColor: "#EEF0F2",
      }}
    >
      <ContentHead
        styles={{
          height: "20svh",
          width: "100%",
          padding: "1vw",
        }}
      >
        <ContentTitle cTitle={"Layanan Kelola Cuti Pegawai"}/>
      </ContentHead>
      <ContentBody
        divStyle={{
          height: "fit-content",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "1vw",
          justifyContent: "center",
          alignItems: "center",
          gap: isMobile ? "3vw" : "1vw",
          flex: "wrap",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "88vh",
            maxHeight: '88vh'
          }}
        >
          <Table1 rows={recordData} column={column} loading={isLoading} />
        </div>
      </ContentBody>
    </div>
  );
};

export default Offday;

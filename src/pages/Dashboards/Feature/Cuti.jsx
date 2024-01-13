import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import Dropdown from "../../../components/global/Dropdown/Dropdown";
import Table1 from "../../../components/parts/Tables/Table1";

const Cuti = () => {
  const [isLoading, setIsLoading] = useState(false);

  const column = useMemo(() => {
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
        alignSelf: 'center'
      },
      {
        field: "title",
        headerName: "Status",
        width: 125,
      },
      {
        field: "created_at",
        headerName: "Catatan Waktu",
        width: 100,
      },
      {
        field: "option",
        headerName: "Option",
        flex: 1,
        width: null,
        renderCell: ({ row: { id, name } }) => {
          return (
            <Modals
              bText="delete"
              mTitle={name}
              funct={() => handleDelete(id)}
              fStyle="level2"
            />
          );
        },
      },
    ];
  }, []);

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
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography sx={{
          fontWeight: '600',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '1.4em'
        }}>Layanan Pengajuan Pengambilan Cuti</Typography>
        <Typography sx={{
          fontWeight: '500',
          fontFamily: 'Poppins, sans-serif',
          color: 'grey',
          fontSize: '0.7em',
          paddingLeft: '1vw'
        }}>Sistem Pekerja Terpadu CV. Karya Abadi</Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1vw",
          width: "100%",
          height: "fit-content",
          alignItems: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "fit-content",
          }}
        >
          <Dropdown
            title={"Harap Dibaca"}
            exclaim={"Tata Cara Pengajuan"}
          >
            <Typography sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400',
              fontSize: '0.8em',
              textAlign: 'justify'
            }}>Disini merupakan petunjuk bagi pegawai untuk dapat menggunakan hak cuti.</Typography>
            <Typography style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400',
              fontSize: '0.8em',
              textAlign: 'justify'
            }}>1. Pengajuan Cuti dapat disertai dengan alasan yang logis dan sesuai dengan peraturan perusahaan serta memberikan benefit bagi pegawai, kolega maupun perusahaan.</Typography>
            <Typography sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400',
              fontSize: '0.8em',
              textAlign: 'justify'
            }}>2. Diwajibkan untuk mempertimbangkan pengajuan setelah meninjau jadwal sesuai dengan target capaian.</Typography>
          </Dropdown>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "fit-content",
          }}
        >
          <Dropdown
            title={"Cuti aktif"}
            exclaim={"Subjek"}
          >
          Disini merupakan petunjuk bagi pegawai untuk dapat menggunakan hak cuti. Pengajuan Cuti dapat disertai dengan alasan yang logis dan sesuai dengan peraturan perusahaan serta memberikan benefit bagi pegawai, kolega maupun perusahaan.
          </Dropdown>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "fit-content",
          background: "transparent",
          display: "flex",
          gap: "1vw",
          justifyContent: "space-evenly",
        }}
      >
        <Paper
          sx={{
            height: "20vh",
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "0.1vw",
            padding: '10px',
          }}
        >
          Pengajuan yang menunggu
        </Paper>
        <Paper
          sx={{
            height: "20vh",
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "0.1vw",
            padding: '10px',
          }}
        >
          Kuota Cuti
        </Paper>
        <Paper
          sx={{
            height: "20vh",
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "0.1vw",
            padding: '10px',
          }}
        >
          Ajukan Cuti
        </Paper>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "88vh",
          maxHeight: "88vh",
        }}
      >
        <Table1 rows={[]} column={column} loading={isLoading} />
      </div>
    </div>
  );
};

export default Cuti;

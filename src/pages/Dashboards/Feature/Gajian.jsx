import { Paper, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import Dropdown from "../../../components/global/Dropdown/Dropdown";
import Table1 from "../../../components/parts/Tables/Table1";
import List from "../../../components/parts/List/List";

const Gajian = () => {
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
        alignSelf: "center",
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
      {/*Start of Content Title*/}
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
          Layanan Penggajian Pegawai
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
      {/*End of Content Title*/}
      {/*Start of Sensitive Information*/}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "1vw",
          height: "fit-content",
          transition: "all 0.5s ease",
        }}
      >
        <Paper
          sx={{
            width: "80%",
            height: "fit-content",
            padding: "2vw 1vw",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Paper
            sx={{
              width: "8vw",
              height: "14vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#1982C4",
                width: "100%",
                height: "3vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "0.8em",
                }}
              >
                Start Date
              </Typography>
            </div>
          </Paper>
          <Paper
            sx={{
              width: "8vw",
              height: "14vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#1982C4",
                width: "100%",
                height: "3vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "0.8em",
                }}
              >
                End Date
              </Typography>
            </div>
          </Paper>
          <Paper
            sx={{
              width: "8vw",
              height: "14vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#069E2D",
                width: "100%",
                height: "3vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "0.8em",
                }}
              >
                Gajian
              </Typography>
            </div>
            <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '5px 10px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            >1</div>
          </Paper>
        </Paper>
        <div
          style={{
            width: "100%",
            height: "fit-content",
          }}
        >
          <Dropdown title={"Pengumuman"} exclaim={"Pembaharuan Terhadap sistem"}></Dropdown>
        </div>
      </div>
      {/*End of Sensitive Information*/}
      {/*Start of Highlighted Content*/}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "1vw",
          height: "fit-content",
          transition: "all 0.5s ease",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            height: "20vh",
            padding: "1vw",
          }}
        >
          Current Payment Accumulated
        </Paper>
        <div
          style={{
            width: "100%",
            height: "fit-content",
          }}
        >
          <Dropdown title={"User"} exclaim={"Informasi Pegawai"}>
            <List title={"Nama"} value={"Gilberth Adrian Lumi"}/>
            <List title={"Posisi"} value={"Staff Magang"}/>
            <List title={"No. Rekening"} value={"BCA - 3530696790"}/>
          </Dropdown>
        </div>
      </div>
      {/*End of Highlighted Content*/}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "1vw",
          width: "100%",
          height: "fit-content",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            height: "20vh",
            width: "100%",
            padding: "1vw",
          }}
        >
          Gaji Harian dan Gaji per Jam
        </Paper>
        <Paper
          sx={{
            display: "flex",
            height: "20vh",
            width: "100%",
            padding: "1vw",
          }}
        >
          Kumulatif Hari Kerja
        </Paper>
        <Paper
          sx={{
            display: "flex",
            height: "20vh",
            width: "100%",
            padding: "1vw",
            fontWeight: '500'
          }}
        >
          Kumulatif Overtime
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
        {/*Datatable for payroll history*/}
        <Table1 rows={[]} column={column} loading={isLoading} />
      </div>
    </div>
  );
};

export default Gajian;

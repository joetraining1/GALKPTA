import React, { useState } from "react";
import ContentBody from "../../../components/main/Content/MainContent/ContentBody";
import { useMediaQuery } from "react-responsive";
import ContentHead from "../../../components/main/Content/MainContent/ContentHead";
import { Avatar, Card, Divider, Typography } from "@mui/material";
import Ports from "../../../assets/ports.png";
import useAuth from "../../../hooks/useAuth";
import Breadcrumb from "../../../components/global/Breadcrumb";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import OpCard from "../../../components/parts/OptionMenu/OpCard";
import Modals from "../../../components/global/Modal";
import ContentTitle from "../../../components/main/Content/MainContent/ContentTitle";

const Profile = () => {
  const [hover, setHover] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const { user } = useAuth();

  // <Card sx={{ background: '#fff', height: '35vh', width: isMobile ? "95%" : '100%', padding: '1vw'}}>Performa Absensi</Card>
  // <Card sx={{ background: '#fff', height: '35vh', width: isMobile ? "95%" : '100%', padding: '1vw'}}>Perkiraan Gajian</Card>

  const AddPhoto = () => {
    return (
      <React.Fragment>
        <AddAPhotoIcon />
        Add or Change Photo
      </React.Fragment>
    );
  };

  const handlePhoto = (msg) => {
    return (
      <Modals
        bText="+Tambah tipe"
        bStyle={{
          height: "5svh",
          width: isMobile ? "90%" : "30%",
        }}
        mTitle="Tambah Data Type"
        fStyle="level1"
      />
    );
  };

  return (
    <ContentBody
      divStyle={{
        height: "fit-content",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "1vw",
        justifyContent: "center",
        alignItems: isMobile ? 'center' : null,
        gap: isMobile ? "3vw" : "1vw",
        marginBottom: '1vw',
      }}
    >
      <ContentHead>
        <ContentTitle cTitle={"Profile Pegawai"}/>
      </ContentHead>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "1vw",
          width: "100%",
          height: "fit-content",
          justifyContent: isMobile ? "center" : "space-evenly",
          flexWrap: "wrap",
          alignItems: isMobile ? 'center' : null,
        }}
      >
        <div
          style={{
            display: "flex",
            height: "fit-content",
            minHeight: "54vh",
            width: isMobile ? "100%" : "30%",
            flexDirection: 'column',
            gap: "1vw",
            flex: "wrap",
            justifyContent: isMobile ? "flex-start" : "space-between",
            alignItems: 'center'
          }}
        >
          {isMobile ? (
            <React.Fragment>
              <Avatar
                alt="prof-pic"
                src={Ports}
                sx={{
                  height: 96,
                  width: 96,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  flex: "wrap",
                  alignItems: isMobile ? 'center' : null
                }}
              >
                <Typography variant="h5">{user ? user.type : null}</Typography>
                <Typography variant="body1">
                  {user ? user.name : null}
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                  superadmin@test.com
                </Typography>
                <Typography variant="body2">+6281234567890</Typography>
              </div>
            </React.Fragment>
          ) : (
            <Card
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flex: "wrap",
                flexDirection: "row",
                width: "100%",
                height: "20svh",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "100%",
                  background: "orange",
                }}
              ></div>
              <div
                style={{
                  padding: "1vw",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  gap: "3%",
                }}
              >
                <Avatar
                  alt="prof-pic"
                  src={Ports}
                  sx={{
                    height: 96,
                    width: 96,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    flex: "wrap",
                  }}
                >
                  <Typography variant="h5">
                    {user ? user.type : null}
                  </Typography>
                  <Typography variant="body1">
                    {user ? user.name : null}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                    superadmin@test.com
                  </Typography>
                  <Typography variant="body2">+6281234567890</Typography>
                </div>
              </div>
            </Card>
          )}
          {isMobile ? null : (
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "fit-content",
                flexDirection: "column",
                gap: "1vw",
              }}
            >
              <Modals
                bText={<AddPhoto />}
                bStyle={{
                  height: "fit-content",
                  display: "flex",
                  gap: "1vw",
                  justifyContent: "flex-start",
                  alignItems: "start",
                  width: "100%",
                  padding: "2% 3% 2% 10%",
                  fontSize: "1vw",
                }}
                mTitle="Upload Foto Profil"
                fStyle="level2"
              />
              <OpCard
                ico={<DriveFileRenameOutlineIcon />}
                text="Edit Profile"
              />
            </div>
          )}
        </div>
          <Card
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flex: "wrap",
              width: isMobile ? "95%" : "68%",
              height: "54vh",
              overflow: "hidden",
              flexDirection: isMobile ? 'column' : 'row',
            }}
          >
            <div
              style={{
                width: isMobile ? "100%" : "10px",
                height: isMobile ? '10px' : "100%",
                background: "#00B2CA",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                padding: "1vw",
              }}
            >
              <Typography variant="h5">Account Informations</Typography>
              <Divider />
            </div>
          </Card>
      </div>
    </ContentBody>
  );
};

export default Profile;

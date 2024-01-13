import { MenuOutlined } from "@mui/icons-material";
import { AppBar, Button, Popover, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import useAuth from "../../../hooks/useAuth";
import useNotif from "../../../hooks/useNotif";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { NavLink } from "react-router-dom";

const Header = ({ toggle, sides }) => {
  const { user, setUser, setTokens } = useAuth();
  const { toastSuccess } = useNotif();

  const [popOver, setPopped] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const handleLogout = () => {
    setUser({});
    setTokens(null);

    return toastSuccess("Goodbye.");
  };

  const handlePopOver = (event) => {
    return setPopped(event.currentTarget);
  };

  const PopClose = () => {
    return setPopped(null);
  };

  const open = Boolean(popOver);
  const id = open ? "priv-pop" : undefined;

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        height: "7svh",
        background: "#fff",
        overflow: 'hidden',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "1svh",
          background: "#C3C9E9",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: "0",
        }}
      >
        <div
          style={{
            width: "15%",
            height: "100%",
            background: "#F5D547",
            marginLeft: "40%",
          }}
        ></div>
        <div
          style={{ width: "15%", height: "100%", background: "#2292A4" }}
        ></div>
      </div>
      <Toolbar
        sx={{
          height: "100%",
          minHeight: "0",
          display: "flex",
          justifyContent: "space-between",
          padding: isMobile && "0",
        }}
      >
        {isMobile ? (
          <Button
            variant="text"
            sx={{ color: "black" }}
            onClick={() => toggle()}
          >
            {sides ? <MenuOpenRoundedIcon /> : <MenuOutlined />}
          </Button>
        ) : null}
        <Typography variant="subtitle1" sx={{ color: "black", fontWeight: '700', fontSize: '1.1em', fontFamily: 'Poppins, sans-serif'}}>
          CV. KARYA ABADI
        </Typography>
        {isMobile ? null : (
          <React.Fragment>
            <Typography sx={{ color: "black", marginLeft: "4.4%" }}>
              {user.name}
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "red",
                borderColor: "red",
                marginLeft: "65%",
                padding: "0.1% 0 0 0",
                width: "6rem",
                height: "1.5rem",
                fontSize: "0.7em",
              }}
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          </React.Fragment>
        )}
        {isMobile ? (
          <React.Fragment>
            <Button
              variant="text"
              aria-describedby={id}
              onClick={handlePopOver}
            >
              <AccountCircleRoundedIcon />
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={popOver}
              onClose={() => PopClose()}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{ left: "0px" }}
            >
              <NavLink to="profile">Profile</NavLink>
              <Button
                variant="outlined"
                sx={{
                  color: "red",
                  borderColor: "red",
                  padding: "0.1% 0 0 0",
                  width: "6rem",
                  height: "1.5rem",
                  fontSize: "0.7em",
                }}
                onClick={() => handleLogout()}
              >
                Logout
              </Button>
            </Popover>
          </React.Fragment>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

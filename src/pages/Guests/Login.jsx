import React, { useState } from "react";
import F1 from "../../assets/f1.jpg";
import GuestBody from "../../components/parts/Body/GuestBody";
import FloatingBody from "../../components/parts/Floating/FloatingBody";
import FloatingTitle from "../../components/parts/Floating/FloatingTitle";
import FloatingContent from "../../components/parts/Floating/FloatingContent";
import LoginForm from "../../components/parts/Forms/LoginForm";
import { Button, Card, Grow, Typography } from "@mui/material";
import {
  FacebookRounded,
  Google,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { useMediaQuery } from "react-responsive";
import CloseRounded from "@mui/icons-material/CloseRounded";

const Login = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px" });
  const [floatActive, setFloatActive] = useState(false);

  const LoginFloat = ({ opened, handle }) => {
    if (!opened) {
      return null;
    }

    return (
      <Grow in={opened || !opened}>
        <Card
          sx={{
            overflow: "hidden",
            background: "#fff",
            borderRadius: "0.5vw",
            display: "flex",
            justifyContent: "space-evenly",
            height: isMobile ? "70svh" : "60svh",
            width: isMobile ? "90%" : "60%",
          }}
        >
          {isMobile ? null : (
            <FloatingTitle
              title="CV Karya Abadi"
              caption='"Mewujudkan mimpi anda bersama keluarga"'
            />
          )}
          <FloatingContent>
            <Button
              variant="text"
              sx={{ marginLeft: "70%" }}
              onClick={() => handle()}
            >
              <CloseRounded />
            </Button>
            <Typography variant="h4" fontWeight="600">
              Login
            </Typography>
            <Typography variant="caption" sx={{ marginTop: "5%" }}>
              silahkan masuk untuk melanjutkan
            </Typography>
            <LoginForm />
            <div
              style={{
                width: isMobile ? "80%" : "60%",
                height: "fit-content",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: isMobile ? "8%" : "4%",
              }}
            >
              <a href="https://facebook.com" target="_blank">
                <FacebookRounded sx={{ color: "#050df7" }} />
              </a>
              <a href="https://instagram.com" target="_blank">
                <Instagram sx={{ color: "#e6d302" }} />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <LinkedIn sx={{ color: "#0570f2" }} />
              </a>
              <a href="https://google.com" target="_blank">
                <Google sx={{ color: "#f20505" }} />
              </a>
            </div>
            <Typography
              variant="caption"
              sx={{ width: "60%", textAlign: "center", marginTop: "3%" }}
            >
              segala informasi pribadi dijaga keamanannya.
            </Typography>
          </FloatingContent>
        </Card>
      </Grow>
    );
  };

  return (
    <GuestBody BG={F1}>
      {!floatActive ? (
        <Grow in={!floatActive}>
          <Typography
            variant={isMobile ? 'h3' : 'h1'}
            sx={{
              color: "#fff",
              textShadow: "4px 4px 3px rgba(0,0,0,0.72)",
              position: "absolute",
              top: "20%",
            }}
          >
            CV. KARYA ABADI
          </Typography>
        </Grow>
      ) : null}
      {floatActive ? null : (
        <Grow in={!floatActive}>
        <Button
          variant="contained"
          sx={{ width: isMobile ? "90%" : "20%" }}
          onClick={() => setFloatActive((prev) => !prev)}
        >
          Login
        </Button>
        </Grow>
      )}
      <LoginFloat opened={floatActive} handle={() => setFloatActive(false)} />
    </GuestBody>
  );
};

export default Login;

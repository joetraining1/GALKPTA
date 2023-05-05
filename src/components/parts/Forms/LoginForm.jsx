import { Button, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useNotif from "../../../hooks/useNotif";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import ApiClient from "../../../utils/ApiClient";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setUser, setTokens } = useAuth();
  const { toastSuccess, toastError, infoToast, updateToast } = useNotif();

  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = async () => {
    setIsLoading(true);
    infoToast('mencoba login..');
    const AuthPayload = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    try {
      await ApiClient.post(
        "/auth/login",
        AuthPayload
      ).then((response) => {
          if(response){
              setUser({
                  name: response?.data?.user?.name,
                  type: response?.data?.user?.type,
                });
                setTokens(response?.data?.authorisation?.token);
                setIsLoading(false);
                updateToast("Login berhasil.", 'success');
                navigate("/");
                return
            }
        })
    } catch (error) {
      const response = error;
      updateToast(response.response.data.message, 'error');
      setIsLoading(false);
      return;
    }
  };
  return (
    <React.Fragment>
      <TextField
        label="email"
        type="text"
        inputRef={emailRef}
        size="small"
        sx={{ width: isMobile ? "80%" : "70%", marginTop: "3%" }}
      />
      <TextField
        label="password"
        type="password"
        inputRef={passRef}
        size="small"
        sx={{ width: isMobile ? "80%" : "70%", marginTop: "3%" }}
      />
      <Button
        sx={{ width: isMobile ? "80%" : "70%", marginTop: "5%", height: "8%" }}
        variant="contained"
        type="submit"
        onClick={() => handleSubmit()}
        disabled={isLoading}
      >
        <Typography variant="button">SIGN IN</Typography>
      </Button>
    </React.Fragment>
  );
};

export default LoginForm;

import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthenticated = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button variant="contained" onClick={() => navigate(-1)}>
        <Typography variant="button">Go Back</Typography>
      </Button>
    </div>
  );
};

export default Unauthenticated;

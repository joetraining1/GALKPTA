import React, { useState } from "react";
import { Card, Grow } from "@mui/material";
import { useMediaQuery } from "react-responsive";

const CardBody = ({ inx, children }) => {
  const [hover, setHover] = useState(false);
  const [dataActive, setDataActive] = useState(true);

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <Grow in={dataActive} timeout={150 * inx}>
      <Card
        sx={{
          width: isMobile ? "90%" : "30vw",
          height: "20svh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          alignSelf: "center",
        }}
        raised={hover}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </Card>
    </Grow>
  );
};

export default CardBody;

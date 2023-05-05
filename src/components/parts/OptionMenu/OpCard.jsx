import { Card } from "@mui/material";
import React, { useState } from "react";

const OpCard = ({ ico, text, func }) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      sx={{
        display: "flex",
        padding: "2% 3%",
        justifyContent: "flex-start",
        paddingLeft: '10%',
        alignItems: "center",
        gap: "1vw",
        cursor: "pointer",
      }}
      raised={hover}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      onClick={func ? () => func() : null}
    >
    {ico ? ico : null}
    {text ? text : null}
    </Card>
  );
};

export default OpCard;

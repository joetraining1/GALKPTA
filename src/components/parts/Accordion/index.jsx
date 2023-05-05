import { Accordion, AccordionDetails, AccordionSummary, Divider } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";

const Accordions = ({ menuSet }) => {
  const [childs, setChilds] = useState(false);

  if (!menuSet) {
    return null;
  }

  return (
    <React.Fragment>
      {menuSet.map((item, index) => {
        return (
          <Accordion
            key={item?.id}
            sx={{
              width: "100%",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </AccordionSummary>
            <Divider />
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: 'fit-content', gap: '2vh', paddingLeft: '10%'}}>
              {item?.subs
                ? item.subs.map((subs) => {
                    return (
                      <NavLink key={subs.id} to={subs.to}>
                        {subs.name}
                      </NavLink>
                    );
                  })
                : null}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </React.Fragment>
  );
};

export default Accordions;

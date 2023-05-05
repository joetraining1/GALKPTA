import React from "react";
import { Drawer, Toolbar } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { SAmenu, ADMmenu, USERmenu } from "./menus";
import Accordions from "../../parts/Accordion";

const Sidebar = ({ open, plex }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const { user } = useAuth();

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: isMobile ? "50%" : "18%",
          height: "93svh",
          marginTop: "7svh",
          overflowY: 'auto',
        },
        "& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
          height: "90svh",
          marginTop: "8.5svh",
          borderRadius: "1vw",
          marginLeft: "3vw",
          overflowY: 'auto',
        },
      }}
      open={open}
      onClose={() => plex()}
    >
      <Toolbar sx={{ display: 'flex', flexDirection: 'column', height: 'fit-content', padding: 0, paddingLeft: 0, paddingRight: 0}}>
        {user?.type === 'Superadmin' 
        ? <Accordions menuSet={SAmenu}/>
        : null
        }
        {user?.type === 'Admin' 
        ? <Accordions menuSet={ADMmenu}/>
        : null
        }
        {user?.type === 'User' 
        ? <Accordions menuSet={USERmenu}/>
        : null
        }
      </Toolbar>
    </Drawer>
  );
};

export default Sidebar;

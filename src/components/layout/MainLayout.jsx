import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DashPage } from "../../pages/Dashboards/dash.styled";
import Header from "../global/Header";
import Sidebar from "../global/Sidebar";
import Content from "../main/Content";
import MainContent from "../main/Content/MainContent";
import useAuth from "../../hooks/useAuth";
import Footer from "../global/Footer";

const MainLayout = () => {
  const [drawActive, setDrawActive] = useState(false);

  const colorss = {
    prime: '#FF6B35',
    navy: '#004E89',
    ly: '#EFEFD0',
    lo: '#F7C59F',
    teal: '#1A659E',
    dark: '#2A2B2A',
    turq: '#00B2CA'
  }

  const { user, token } = useAuth();

  console.log("kalo ini ada, berarti semuanya ke render ulang");

  const handleDrawer = () => {
    return setDrawActive(!drawActive);
  };

  return user && token ? (
    <DashPage>
      <Header toggle={() => handleDrawer()} sides={drawActive}/>
      <Content>
        <Sidebar open={drawActive} plex={() => handleDrawer()} />
        <MainContent>
          <Outlet />
          <Footer />
        </MainContent>
      </Content>
    </DashPage>
  ) : (
    <Navigate to="login" replace />
  );
};

export default MainLayout;

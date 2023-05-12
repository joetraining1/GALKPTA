import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import UserFilter from "./utils/UserFilter";
import Dashboard from "./pages/Dashboards";
import Login from "./pages/Guests/Login";
import NotFound from "./pages/Guests/NotFound";
import Unaouthorized from "./pages/Dashboards/Unaouthorized";
import Unauthenticated from "./pages/Guests/Unauthenticated";
import NotifProvider from "./contexts/NotifProvider";
import Profile from "./pages/Dashboards/Profile";
import MainLayout from "./components/layout/MainLayout";
import Types from "./pages/Dashboards/Master/Types";
import Master from "./pages/Dashboards/Master";
import Management from "./pages/Dashboards/Management";
import Featured from "./pages/Dashboards/Feature";
import Personalized from "./pages/Dashboards/Personalize";
import Cuti from "./pages/Dashboards/Feature/Cuti";
import Absensi from "./pages/Dashboards/Feature/Absensi";
import Gajian from "./pages/Dashboards/Feature/Gajian";
import Overtime from "./pages/Dashboards/Management/Overtime";
import Rosters from "./pages/Dashboards/Management/Rosters";
import Offday from "./pages/Dashboards/Management/Offday";
import Pinalty from "./pages/Dashboards/Management/Pinalty";
import Deployment from "./pages/Dashboards/Management/Deployment";
import Banks from "./pages/Dashboards/Master/Banks";
import Records from "./pages/Dashboards/Management/Records";
import Regions from "./pages/Dashboards/Master/Regions";
import Areas from "./pages/Dashboards/Master/Areas";
import Annuals from "./pages/Dashboards/Master/Annuals";
import Warnings from "./pages/Dashboards/Master/Warnings";
import Classes from "./pages/Dashboards/Master/Classes";
import Contracts from "./pages/Dashboards/Master/Contracts";
import Status from "./pages/Dashboards/Master/Status";
import Absences from "./pages/Dashboards/Master/Absences";
import Tasks from "./pages/Dashboards/Master/Tasks";
import Educations from "./pages/Dashboards/Master/Educations";
import Departments from "./pages/Dashboards/Master/Departments";
import Roles from "./pages/Dashboards/Master/Roles";
import Positions from "./pages/Dashboards/Master/Positions";
import Salaries from "./pages/Dashboards/Master/Salaries";
import FHelper from "./pages/Dashboards/Feature/FHelper";
import Users from "./pages/Dashboards/Master/Users";
import Requests from "./pages/Dashboards/Management/Requests";

function App() {
  const Account = {
    Superadmin: "Superadmin",
    Admin: "Admin",
    User: "User",
  };

  return (
    <AuthProvider>
      <NotifProvider>
        <Routes>
          <Route path="/">
            <Route path="unauthenticated" element={<Unauthenticated />} />
            <Route path="login" element={<Login />} />
            <Route element={<MainLayout />}>
              <Route
                element={
                  <UserFilter
                    access={[Account.Superadmin, Account.Admin, Account.User]}
                  />
                }
              />
              <Route path="unauthorized" element={<Unaouthorized />} />
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="personal" element={<Personalized />} />
              <Route path="fitur" element={<Featured />} />
              <Route path="cuti" element={<Cuti />} />
              <Route path="attendance" element={<Absensi />} />
              <Route path="payroll" element={<Gajian />} />
              <Route path="bantuan" element={<FHelper />}/>
              <Route
                element={
                  <UserFilter access={[Account.Superadmin, Account.Admin]} />
                }
              />
              <Route path="manage" element={<Management />} />
              <Route path="overtime" element={<Overtime />} />
              <Route path="rosters" element={<Rosters />} />
              <Route path="offday" element={<Offday />} />
              <Route path="executions" element={<Pinalty />} />
              <Route path="deployment" element={<Deployment />} />
              <Route path="record" element={<Records />} />
              <Route path="requests" element={<Requests />} />
              <Route element={<UserFilter access={[Account.Superadmin]} />} />
              <Route path="master" element={<Master />} />
              <Route path="banks" element={<Banks />} />
              <Route path="types" element={<Types />} />
              <Route path="regions" element={<Regions />} />
              <Route path="areas" element={<Areas />} />
              <Route path="annuals" element={<Annuals />} />
              <Route path="warnings" element={<Warnings />} />
              <Route path="classes" element={<Classes />} />
              <Route path="statuses" element={<Status />} />
              <Route path="absences" element={<Absences />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="contracts" element={<Contracts />} />
              <Route path="educations" element={<Educations />} />
              <Route path="departments" element={<Departments />} />
              <Route path="roles" element={<Roles />} />
              <Route path="positions" element={<Positions />} />
              <Route path="salaries" element={<Salaries />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Route>
          <Route path="*" exact="true" element={<NotFound />} />
        </Routes>
      </NotifProvider>
    </AuthProvider>
  );
}

export default App;

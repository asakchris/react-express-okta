import { Routes, Route } from "react-router-dom";
import { LoginCallback } from "@okta/okta-react";
import { RequiredAuth } from "./SecureRoute";

import Home from "../pages/Home";
import Protected from "../pages/Protected";
import Loading from "./Loading";
import Profile from "../pages/Profile";
import Rooms from "../pages/Rooms";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="login/callback"
        element={<LoginCallback loadingElement={<Loading />} />}
      />
      <Route id="rooms" path="/rooms" element={<RequiredAuth />}>
        <Route index element={<Rooms />} />
      </Route>
      <Route path="/protected" element={<RequiredAuth />}>
        <Route path="" element={<Protected />} />
      </Route>
      <Route path="/profile" element={<RequiredAuth />}>
        <Route path="" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

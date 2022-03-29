import { ProtectedRoute } from "components";
import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";

import { AuthPage, DashboardPage, LandingPage } from "./pages";

const App = () => {
  const [jwt, setJwt] = useState(localStorage.getItem("jwt"));

  useEffect(() => {
    setJwt(localStorage.getItem("jwt"));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      {/* <Route element={<ProtectedRoute jwt={jwt} />}> */}
        <Route path="/dashboard" element={<DashboardPage />} />
      {/* </Route> */}
    </Routes>
  );
};

export default App;

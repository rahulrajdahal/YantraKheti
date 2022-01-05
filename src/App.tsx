import { Typography, Box, Grid } from "@material-ui/core";
import { BarChart, SensorsOff } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";

import lightOn from "./assets/images/light-on.png";
import lightOff from "./assets/images/light-off.png";
import motorOn from "./assets/images/motor-on.gif";
import motorOff from "./assets/images/motor-off.jpg";
import Navbar from "./components/navbar";
import Sensors from "./components/sensors";
import Graphs from "./components/graphs";
import { useState } from "react";
import { AuthPage, LandingPage } from "./pages";

const App = () => {
  // const { location } = useHistory();

  // const tabs = [
  //   {
  //     id: 1,
  //     name: "Graph Data",
  //     path: "/",
  //     component: <Graphs />,
  //     icon: <BarChart />,
  //   },
  //   {
  //     id: 2,
  //     name: "Sensors",
  //     path: "/sensors",
  //     component: <Sensors />,
  //     icon: <SensorsOff />,
  //   },
  // ];

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
    // <div>
    //   <Navbar />

    //   <Typography variant="h1" style={{ textAlign: "center" }}>
    //     Hydroponics App
    //   </Typography>

    //   <Grid
    //     style={{
    //       display: "flex",
    //       alignItems: "flex-start",
    //       justifyContent: "space-around",
    //     }}
    //   >
    //     <Grid
    //       item
    //       md={4}
    //       style={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //         padding: "0 5%",
    //         margin: "0 10%",
    //         background: "#1976D2",
    //       }}
    //     >
    //       {tabs.map((item) => (
    //         <Box
    //           key={item.id}
    //           display="flex"
    //           alignItems="center"
    //           justifyContent="space-around"
    //           style={{
    //             width: "100%",
    //             textDecoration: "none",
    //             borderBottom: "1px solid #fff",
    //             padding: "1rem 0",
    //           }}
    //         >
    //           {item.icon}
    //           <Link to={item.path} style={{ textDecoration: "none" }}>
    //             <Typography variant="h4">{item.name}</Typography>
    //           </Link>
    //         </Box>
    //       ))}
    //     </Grid>

    //     <Grid item md={12}>
    //       <Switch>
    //         {tabs.map((item) => (
    //           <Route exact path={item.path}>
    //             {item.component}
    //           </Route>
    //         ))}
    //       </Switch>
    //     </Grid>
    //   </Grid>
    // </div>
  );
};

export default App;

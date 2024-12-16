import React from "react";

import Navbar from "./Component/Navbar";
import AllRoutes from "./Component/AllRoutes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <ToastContainer />
    </>
  );
};

export default App;

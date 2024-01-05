import React from "react";
import Index from "./routes/index";

// Toaster
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./css/index.css";

const badge = "extraordinary";

const App = () => {
  return (
    <div className="App">
      {/* Toaster Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        transition={Flip}
      />
      {/* Route */}
      <Index />
    </div>
  );
};

export default App;

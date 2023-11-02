import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Detail from "../containers/Detail";
import DestructureInput from "../Different/DestructureInput";
import ShaffleArr from "../Different/ShaffleArr";

const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/details/:id" element={<Detail />} />
        {/* <Route path="/" element={<ShaffleArr />} /> */}
        {/* <Route path="/" element={<DestructureInput />} /> */}
      </Routes>
    </div>
  );
};

export default index;

import React from "react";
import { useParams } from "react-router-dom";
import Data from "../data/bootcamp.json";
import "../css/index.css";

const Detail = () => {
  const { id } = useParams();

  const getMyBootcamp = Data.find((rohail) => rohail._id === id);
  console.log(getMyBootcamp);
  console.log(id);

  return (
    <div className="detailCard">
      <h1>{getMyBootcamp.name}</h1>
      <p>{getMyBootcamp.description}</p>
      <h3>{getMyBootcamp.address}</h3>
      <h5>{getMyBootcamp.email}</h5>
      <p>{getMyBootcamp.phone}</p>
      <h4>{getMyBootcamp.website}</h4>
    </div>
  );
};

export default Detail;

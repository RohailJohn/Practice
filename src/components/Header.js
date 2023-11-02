import React, { useState } from "react";
import { Link } from "react-router-dom";
import bootcamp from "../data/bootcamp.json";

const Header = () => {
  const [data, setData] = useState(bootcamp);
  console.log(data);

  // for (let i = data.length - 1; i > 0; i--) {
  //   let j = Math.floor(Math.random() * (i + 1));
  //   let temp = data[i];
  //   data[i] = data[j];
  //   data[j] = temp;
  // }

  return (
    <div className="header">
      {data?.map((ele, i) => {
        return (
          <div
            className="card"
            key={i}
            style={{
              width: "350px",
              height: "auto",
              border: "1px solid",
            }}
          >
            <h2>{ele.name}</h2>
            <h3>{ele.email}</h3>
            <h4>{ele.address}</h4>
            <h5>{ele.phone}</h5>
            <Link to={`/details/${ele._id}`}>
              <button>Detail View</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return <div>header</div>;
// };

// export default Header;

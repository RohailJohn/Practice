import React, { useState } from "react";

const DestructureInput = () => {
  const [arr, setArr] = useState([]);

  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    age: "",
  });

  const { name, email, address, phone, age } = data;

  const HandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const ShowData = () => {
    setArr((kaku) => [...kaku, data]);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => HandleChange(e)}
      />
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => HandleChange(e)}
      />
      <input
        type="text"
        name="address"
        value={address}
        onChange={(e) => HandleChange(e)}
      />
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={(e) => HandleChange(e)}
      />
      <input
        type="text"
        name="age"
        value={age}
        onChange={(e) => HandleChange(e)}
      />
      <button onClick={ShowData}>Show Data</button>

      {arr?.map((ele, i) => (
        <div key={i}>
          <div>{ele.name}</div>
          <div>{ele.address}</div>
          <div>{ele.email}</div>
          <div>{ele.phone}</div>
          <div>{ele.age}</div>
        </div>
      ))}
    </div>
  );
};

export default DestructureInput;

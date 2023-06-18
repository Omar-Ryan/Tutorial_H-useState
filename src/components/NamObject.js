import React, { useState } from "react";

const NamObject = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    <>
      <input
        type="text"
        placeholder="firstName"
        value={name.firstName}
        onChange={(e) => {
          setName({ ...name, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="lastName"
        value={name.lastName}
        onChange={(e) => {
          setName({ ...name, lastName: e.target.value });
        }}
      />
      <h2>
        My Name Is : {name.firstName} {name.lastName}
      </h2>
    </>
  );
};

export default NamObject;

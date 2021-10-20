import React from "react";

function Badge ({ name, value }) {
    console.log("Badge is rendered");
  return <span className={name}>{value}</span>;
};

export default Badge;

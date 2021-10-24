import React from "react";

function Badge({ name, value }) {
  return value === 0 ? null : <span className={name}>{value}</span>;
}

export default Badge;

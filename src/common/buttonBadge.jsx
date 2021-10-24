import React from "react";
import "..//css/btn.css";

const ButtonBadge = ({ reports, btnId, btnValue, onClick }) => {
  const { length } = reports.filter((r) => r.pcbPositionId === btnId);
  const spanClass =
    "position-absolute top-0 start-100 p-2 translate-middle badge rounded-pill bg-danger";
  return (
    <button
      type="button"
      onClick={() => onClick(btnId)}
      className="btn btn-secondary me-4 mb-4 position-relative p-2 btn-custom"
    >
      {btnValue}
      <span className={length === 0 ? "d-none " + spanClass : spanClass}>
        {length}
      </span>
    </button>
  );
};

export default ButtonBadge;

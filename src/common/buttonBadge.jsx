import React from "react";
import "..//css/btn.css";

const ButtonBadge = ({ btnValue, badgeValue }) => {
  return (
    <button type="button" className="btn btn-secondary me-4 mb-4 position-relative p-2 btn-custom">
      {btnValue}
      <span className="position-absolute top-0 start-100 p-2 translate-middle badge rounded-pill bg-danger">
        {badgeValue}
      </span>
    </button>
  );
};

export default ButtonBadge;

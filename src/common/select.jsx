import React from "react";

const Select = ({ items, label, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target);
  };

  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <select
        name={label}
        id={label}
        className="form-control"
        onChange={handleChange}
      >
        <option value="" />
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

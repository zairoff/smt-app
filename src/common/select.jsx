import React from "react";

const Select = ({ items, label, name, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target);
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        className="form-control"
        onChange={
          handleChange
        }
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

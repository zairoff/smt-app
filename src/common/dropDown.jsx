import React, { PureComponent } from "react";

const DropDown = ({ items }) => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDarkDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </a>
      <ul
        className="dropdown-menu dropdown-menu-dark"
        aria-labelledby="navbarDarkDropdownMenuLink"
      >
        {items.map((item) => (
          <li>
            <a className="dropdown-item" href="#">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropDown;

import React from "react";
import Badge from "./badge";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
  reports,
}) => {
  const classNameList =
    "list-group-item d-flex justify-content-between align-items-center";
  const classNameBadge = "badge rounded-pill";
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? classNameList + " active" : classNameList
          }
        >
          {item[textProperty]}
          <Badge
            name={
              item === selectedItem
                ? classNameBadge + " bg-warning text-dark"
                : classNameBadge + " bg-primary"
            }
            value={reports.filter((r) => r.defectId === item[valueProperty]).length}
          />
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
};

export default ListGroup;

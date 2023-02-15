import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpenseListItem = (props) => {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between">
        {props.name}
        <div>
          <span>{props.cost}</span>
          <TiDelete className="right" />
        </div>
      </li>
    </div>
  );
};

export default ExpenseListItem;

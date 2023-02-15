import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";

const ExpenseListItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between">
        {props.name}
        <div>
          <span className="costs">{props.cost}</span>
          <TiDelete className="right" onClick={handleDelete} />
        </div>
      </li>
    </div>
  );
};

export default ExpenseListItem;

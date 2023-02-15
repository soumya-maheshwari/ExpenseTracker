import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import ExpenseListItem from "./ExpenseListItem";
const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <div>
      <ul className="list-group">
        {expenses.map((item) => (
          <ExpenseListItem id={item.id} name={item.name} cost={item.cost} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

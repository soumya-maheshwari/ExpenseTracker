import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const styling = totalExpense > budget ? "alert-danger" : "alert-success";
  return (
    <div className={`alert ${styling}`}>
      <span>Remaining: {budget - totalExpense} </span>
    </div>
  );
};

export default Remaining;

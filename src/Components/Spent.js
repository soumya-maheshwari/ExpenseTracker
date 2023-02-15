import React from "react";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
const Spent = () => {
  const { expenses } = useContext(AppContext);
  // Using the reduce function to get a total of all the costs and assigning this to a variable
  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-primary">
      <span>Spent so far: {totalExpense}</span>
    </div>
  );
};
export default Spent;

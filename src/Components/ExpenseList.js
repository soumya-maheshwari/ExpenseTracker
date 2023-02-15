import React from "react";
import ExpenseListItem from "./ExpenseListItem";
const ExpenseList = () => {
  const expenses = [
    {
      id: 1,
      name: "shopping",
      cost: 100,
    },
    {
      id: 2,
      name: "food",
      cost: 300,
    },
    {
      id: 3,
      name: "maintainence",
      cost: 900,
    },
    {
      id: 4,
      name: "car",
      cost: 1000,
    },
  ];
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

import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { AiFillEdit } from "react-icons/ai";
const Budget = () => {
  const { Budget } = useContext(AppContext);
  return (
    <div className="alert alert-secondary">
      <span>Budget: {Budget}</span>
      <AiFillEdit className="edit-icon" />
    </div>
  );
};

export default Budget;

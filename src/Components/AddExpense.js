import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";
const AddExpense = () => {
  // getting dispatch from global state
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    // an expense object is created containing name and cost

    // This is what will get dispatched as the payload, and what we'll use to update the state. We're also using the uuid package we imported earlier to create an ID. This is used to identify a given expense
    const expense = {
      id: uuidv4(),
      name: name,
      cost: cost,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col">
            <label>Expenses on</label>
            <input
              type="text"
              required="required"
              className="input"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="row">
            <div className="col mt-3">
              <label>cost</label>
              <input
                type="text"
                required="required"
                className="input"
                value={cost}
                onChange={(event) => {
                  setCost(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-4">
              <button type="submit" className="btn btn-primary ">
                save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;

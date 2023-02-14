import React from "react";

const AddExpense = () => {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col">
            <label>Expenses on</label>
            <input type="text" required="required" />
          </div>

          <div className="col">
            <label>cost</label>
            <input type="text" required="required" />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary add">
              save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;

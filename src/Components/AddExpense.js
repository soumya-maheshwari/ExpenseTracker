import React from "react";

const AddExpense = () => {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col">
            <label>Expenses on</label>
            <input type="text" required="required" className="input" />
          </div>
          <div className="row">
            <div className="col mt-3">
              <label>cost</label>
              <input type="text" required="required" className="input" />
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

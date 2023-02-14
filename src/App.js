import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./Components/Budget";
import Remaining from "./Components/Remaining";
import Spent from "./Components/Spent";
import AddExpense from "./Components/AddExpense";
function App() {
  return (
    <div className="container">
      <h1 className="heading">My Budget Planner</h1>
      <div className="row ">
        <div className="col">
          <Budget />
        </div>
        <div className="col">
          <Remaining />
        </div>
        <div className="col">
          <Spent />
        </div>
      </div>
      <h2 className="heading">ADD EXPENSE</h2>
      <div className="row mt-3">
        <div className="col mt-3">
          <AddExpense />
        </div>
      </div>
    </div>
  );
}

export default App;

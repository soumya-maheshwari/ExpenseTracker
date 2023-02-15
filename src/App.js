import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./Components/Budget";
import Remaining from "./Components/Remaining";
import Spent from "./Components/Spent";
import AddExpense from "./Components/AddExpense";
import Footer from "./Components/Footer";
import ExpenseList from "./Components/ExpenseList";
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
      {/* <h2 className="heading">ADD EXPENSE</h2> */}
      {/* <div className="row ">
        <div className="col ">
          <AddExpense />
        </div>
      </div> */}
      <div className="row">
        <ExpenseList />
      </div>
      <Footer />
    </div>
  );
}

export default App;

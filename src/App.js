import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./Components/Budget";
import Remaining from "./Components/Remaining";
import Spent from "./Components/Spent";
import AddExpense from "./Components/AddExpense";
import Footer from "./Components/Footer";
import ExpenseList from "./Components/ExpenseList";
import { AppProvider } from "./Context/AppContext";
function App() {
  return (
    <AppProvider>
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
        <div className="row">
          <ExpenseList />
        </div>
        <h2 className="heading">ADD EXPENSE</h2>
        <div className="row ">
          <div className="col ">
            <AddExpense />
          </div>
        </div>

        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;

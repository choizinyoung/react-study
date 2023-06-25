import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "화장지",
    amount: 9400,
    date: new Date(1990, 2, 7),
  },
  {
    id: "e2",
    title: "모니터",
    amount: 19400,
    date: new Date(2015, 8, 22),
  },
  {
    id: "e3",
    title: "자동차보험",
    amount: 499400,
    date: new Date(2021, 11, 6),
  },
  {
    id: "e4",
    title: "밥상",
    amount: 999400,
    date: new Date(2021, 8, 22),
  },
  {
    id: "e5",
    title: "얍얍",
    amount: 9900,
    date: new Date(1994, 11, 9),
  },
  {
    id: "e5",
    title: "얍얍",
    amount: 5000,
    date: new Date(1994, 6, 9),
  },
];

function App() {
  const [expenseList, setExpenseList] = useState(expenses);
  const addExpenseFn = (expenses) => {
    return setExpenseList((prev) => {
      return [expenses, ...prev];
    });
  };
  return (
    <div className="App">
      <h1>App :D</h1>
      <NewExpense onAddExpense={addExpenseFn} />
      <Expenses expenses={expenseList} />
    </div>
  );
}

export default App;

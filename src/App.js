import "./App.css";
import Expenses from "./components/Expenses";

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
    date: new Date(1994, 12, 9),
  },
];

function App() {
  return (
    <div className="App">
      <h1>App :D</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

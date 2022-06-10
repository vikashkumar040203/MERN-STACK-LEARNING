import React from "react";
import Expenses from "./components/Expenses";
import ExpenseItem from "./components/Expenses";
function App() {
  let expenses = [
    {
      id: "e1",
      title: "college fee",
      amount: 2000,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e2",
      title: "Hostel fee",
      amount: 20100,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e3",
      title: "Daily uses",
      amount: 100,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e4",
      title: "Debit",
      amount: 1234,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Lets Go !</h2>
      <Expenses item={expenses} />
    </div>
  );
}
export default App;

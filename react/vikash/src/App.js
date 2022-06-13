import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

let Dummyexpenses = [
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
const App = () => {
  const [expenses,setExpenses]=useState(Dummyexpenses);
  const addExpensehandler = (expense) => {
    // console.log(expense);
    const updatedExpenses=[expense,...expenses];
    setExpenses(updatedExpenses)
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpensehandler} />
      <Expenses item={expenses} />
    </div>
  );
};
export default App;

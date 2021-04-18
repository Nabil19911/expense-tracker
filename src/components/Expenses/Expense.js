import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "../FilterExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = ({ expenses }) => {
  // filter
  const [filtered, setFiltered] = useState("2021");
  const filterDateValue = (dateValue) => {
    setFiltered(dateValue);
  };
  const filteredList = expenses.filter(({ date }) => {
    return date.getFullYear().toString() === filtered;
  });
  return (
    <li>
      <Card className="expense">
        <ExpensesFilter selected={filtered} onDateFiltered={filterDateValue} />
        <ExpensesChart expenses={filteredList} />
        <ExpensesList filtedList={filteredList} />
      </Card>
    </li>
  );
};

export default Expense;

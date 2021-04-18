import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onSavedUserData }) => {
  const [open, setOpen] = useState(false);
  const userSubmitData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    // Passing the data to Parent Element(App.js)
    onSavedUserData(expenseData);
    setOpen(false);
  };
  const cancel = (bol) => {
    setOpen(bol);
  };

  return (
    <div className="new-expense">
      {!open && <button onClick={() => setOpen(true)}>ADD NEW EXPENSES</button>}
      {open && (
        <ExpenseForm onCancel={cancel} onSavedUserData={userSubmitData} />
      )}
    </div>
  );
};

export default NewExpense;

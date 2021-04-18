import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = ({ filtedList }) => {
  if (filtedList.length === 0) {
    return <h2 className="expenses-list__fallback">No Data Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {filtedList.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </ul>
  );
};

export default ExpensesList;

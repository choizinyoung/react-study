import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "../ExpenseItem";

const ExpenseList = (props) => {
  let expenseContent = '';
  if (props.items.length > 0) {
    expenseContent = props.items.map((data, i) => {
      return (
        <ExpenseItem
          key={data.id}
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
      );
    });
  } else {
    expenseContent = <h2 className="expense-list__fallback">조회결과가 없습니다</h2>;
  }
  return <div className="expense-list">{expenseContent}</div>;
};
export default ExpenseList;

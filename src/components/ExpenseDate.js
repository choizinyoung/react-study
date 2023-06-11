import React from "react";
import "./ExpenseDate.css"

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.getMonth().toString().padStart(2, "0");
  const day = props.date.getDate().toString().padStart(2, "0");
  // console.log(year, month, day)
  return (
    <div className="expense-date">
      <div className="expense-date__year">{month != 0 ? year : year - 1}년</div>
      <div className="expense-date__month">{month != 0 ? month : 12}월</div>
      <div className="expense-date__day">{day}일</div>
    </div>
  );
};
export default ExpenseDate;

import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "./Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses &&
        props.expenses.map((data, i) => {
          return (
            <ExpenseItem
              title={props.expenses[i].title}
              amount={props.expenses[i].amount}
              date={props.expenses[i].date}
            />
          );
        })}
    </Card>
  );
};
export default Expenses;

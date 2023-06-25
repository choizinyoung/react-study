import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [edit, setEdit] = useState(false);
  const saveExpenseFn = (data) => {
    const expense = data;
    //Math함수 사용하여 아이디를 생성
    const expenseData = { ...expense, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };
  const EditFn = () => {
    setEdit(!edit);
  };
  return (
    <div className="new-expense">
      {/* ExpenseForm(saveExpenseFn) */}
      {edit === false && <button onClick={EditFn}>지출추가</button>}
      {edit === true && <ExpenseForm onSaveExpense={saveExpenseFn} onCancle={EditFn} />}
    </div>
  );
};
export default NewExpense;

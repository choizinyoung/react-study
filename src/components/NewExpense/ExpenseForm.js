import React, { useState, useEffect } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //단일로 데이터 관리
  const [title, setTitle] = useState('');
  const [num, setNum] = useState(0);
  const [date, setDate] = useState('');

  const titleFn = (e) => {
    setTitle(e.target.value)
  };
  const numFn = (e) => {
    setNum(e.target.value)
  };
  const dateFn = (e) => {
    setDate(e.target.value)
  };

  console.log(date)
  const submitFn = (e) => {
    e.preventDefault();
    //앞에 +붙여주면 입력값이 숫자로 바뀐다.
    const expenseData = {
      title : title, amount : +num, date : new Date(date)
    }
    console.log(expenseData);
    props.onSaveExpense(expenseData)
    setTitle('')
    setNum(0)
    setDate('')
  };
  return (
    <div>
      <form action="#" onSubmit={submitFn}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>제목</label>
            <input type="text" onChange={titleFn} value={title}/>
          </div>
          <div className="new-expense__control">
            <label>금액</label>
            <input type="number" min="0" step="100" onChange={numFn} value={num}/>
          </div>
          <div className="new-expense__control">
            <label>날짜</label>
            <input
              type="date"
              min="1999-01-01"
              max="2080-12-31"
              onChange={dateFn}
              value={date}
            />
          </div>
          <div className="new-expense__action">
            <button type="cancle" onClick={props.onCancle}>취소하기</button>
            <button type="submit">추가하기</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;

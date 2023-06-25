import React, { useState, useEffect } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //단일로 데이터 관리
  // const [title, setTitle] = useState('');
  // const [num, setNum] = useState(0);
  // const [date, setDate] = useState();
  //state 다중 속성
  const [userInput, setUserInput] = useState({
    inputTitle: "",
    inputNum: 0,
    inputDate: "",
  });
  const titleFn = (e) => {
    //   setUserInput({
    //     ...userInput,
    //   inputTitle : e.target.value,
    // })
    setUserInput((prev) => {
      return { ...prev, inputTitle: e.target.value };
    });
  };
  const numFn = (e) => {
    //   setUserInput({
    //     ...userInput,
    //   inputNum : e.target.value,
    // })
    setUserInput((prev) => {
      return { ...prev, inputNum: e.target.value };
    });
  };
  const dateFn = (e) => {
    //   setUserInput({
    //     ...userInput,
    //   inputDate : e.target.value,
    // })
    setUserInput((prev) => {
      return { ...prev, inputDate: e.target.value };
    });
  };
  console.log(userInput)
  const submitFn = () => {};
  return (
    <div>
      {userInput.inputTitle}/{userInput.inputNum}/{userInput.inputDate}
      <form action="#" onSubmit={submitFn}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>제목</label>
            <input type="text" onChange={titleFn} />
          </div>
          <div className="new-expense__control">
            <label>금액</label>
            <input type="number" min="0" step="100" onChange={numFn} />
          </div>
          <div className="new-expense__control">
            <label>날짜</label>
            <input
              type="date"
              min="1999-01-01"
              max="2080-12-31"
              onChange={dateFn}
            />
          </div>
          <div className="new-expense__action">
            <button onClick={submitFn}>추가하기</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;

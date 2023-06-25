import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
    const selectYearFn = (e) => {
        props.onSelectYear(e.target.value)
    }
  return (
    <>
      <h1>ExpenseFilter</h1>
      <div className="expenses-filter">
        <div className="expenses-filter_control">
          <label>연도별</label>
          <select onChange={selectYearFn} value={props.selected}>
            <option value="1990">1990</option>
            <option value="1994">1994</option>
            <option value="2015">2015</option>
            <option value="2021">2021</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
    </>
  );
}
export default ExpenseFilter;

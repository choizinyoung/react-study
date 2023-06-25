import React, { useState } from "react";

import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  //조건부 렌더링 사용법, 필터링
  const items = props.expenses;
  const [filteredYear, setFilteredYear] = useState("1994");
  const selectYearFn = (data) => {
    console.log("Years :::", data);
    setFilteredYear(data);
  };

  const filteredYearFn = items.filter((item) => {
    const month = item.date.getMonth().toString().padStart(2, "0");
    const year = item.date.getFullYear();
    const yearsfix = month != 0 ? year : year - 1;
    return yearsfix.toString() == filteredYear.toString();
  });
  console.log("filteredYearFn", filteredYearFn);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onSelectYear={selectYearFn} />
        <ExpenseChart expense={filteredYearFn} />
        {/* {filteredYearFn && filteredYearFn.length === 0 ? (
          <p>조회결과가 없습니다</p>
        ) : (
          filteredYearFn.map((data, i) => {
            return (
              <ExpenseItem
                key={data.id}
                title={data.title}
                amount={data.amount}
                date={data.date}
              />
            );
          })
        )} */}
        {/*         {filteredYearFn.length === 0 && <p>조회결과가 없습니다</p>}
        {filteredYearFn.length > 0 &&
          filteredYearFn.map((data, i) => {
            return (
              <ExpenseItem
                key={data.id}
                title={data.title}
                amount={data.amount}
                date={data.date}
              />
            );
          })} */}
        <ExpenseList items={filteredYearFn} />
      </Card>
    </div>
  );
};
export default Expenses;

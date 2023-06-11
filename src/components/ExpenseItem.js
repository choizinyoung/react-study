import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
  //react에서 conponent는 return에 태그를 반환한다. jsx
  const click = () => {
    setTitle("이름바꿔보자")
  };
  return (
    <Card className="expense-item">
      {/* <div>
                {props.date.toISOString()}
            </div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}원</div>
      </div>
      <button onClick={click}>클릭</button>
    </Card>
  );
}
export default ExpenseItem;

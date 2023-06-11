import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    //나머지도 다 해오기!
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState();
    const titleFn =(e)=>{
        setTitle(e.target.value)
    }
    console.log(title)
  return (
    <div>
      <form action="#">
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>제목</label>
              <input type="text" onChange={titleFn}/>
            </div>
            <div className="new-expense__control">
              <label>금액</label>
              <input type="number" min='0' step='100'/>
            </div>
            <div className="new-expense__control">
              <label>날짜</label>
              <input type="date" min='1999-01-01' max='2080-12-31' />
            </div>
            <div className="new-expense__action">
                <button>추가하기</button>
            </div>
          </div>
      </form>
    </div>
  );
};
export default ExpenseForm;

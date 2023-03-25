//Convention is to have function name as filename
import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);//It's a react hook and must be called inside a component function like this and shouldn't be called inside nested functions

  const clickHandler = () =>{
    setTitle('Updated!');
    console.log(title);
  }


  return (
    <Card
    className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);

  }
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onChangeFilter={expenseChangeHandler}/>
        <ExpenseItem
          title={props.Mydict[0].title}
          amount={props.Mydict[0].amount}
          date={props.Mydict[0].date}
        />
        <ExpenseItem
          title={props.Mydict[1].title}
          amount={props.Mydict[1].amount}
          date={props.Mydict[1].date}
        />
        <ExpenseItem
          title={props.Mydict[2].title}
          amount={props.Mydict[2].amount}
          date={props.Mydict[2].date}
        />
        <ExpenseItem
          title={props.Mydict[3].title}
          amount={props.Mydict[3].amount}
          date={props.Mydict[3].date}
        />
        <ExpenseItem
          title={props.Mydict[4].title}
          amount={props.Mydict[4].amount}
          date={props.Mydict[4].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;

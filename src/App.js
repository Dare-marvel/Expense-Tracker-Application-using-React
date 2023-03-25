import React from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  // const para = document.createElement('p');
  // para.textContent = 'This is the second text';
  // document.getElementById('root').append(para);
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 20),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Laptop",
      amount: 45000,
      date: new Date(2022, 7, 14),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />  */}

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses Mydict={expenses} />
    </div>
  );

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { Mydict: expenses[0] }),
  //   React.createElement(Expenses, { Mydict: expenses[1] }),
  //   React.createElement(Expenses, { Mydict: expenses[2] }),
  //   React.createElement(Expenses, { Mydict: expenses[3] })
  // );
};

export default App;

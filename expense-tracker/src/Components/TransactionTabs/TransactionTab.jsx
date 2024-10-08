import React, { useContext, useState } from "react";
import "./Transactions.css";
import TransactionContext from "../../Context/TransactionContext";

import foodIcon from "../../assets/food.svg";
import movieIcon from "../../assets/movie.svg";
import travelIcon from "../../assets/travel.svg";
import editIcon from "../../assets/editIcon.svg";
import deleteIcon from "../../assets/closeIcon.svg";
import MoneyContext from "../../Context/MoneyContext";
import ExpenseInput from "../ExpenseForm/ExpenseInput";
import FormContext from "../../Context/FormContext";

const TransactionTab = ({ name, amount, date, category, id }) => {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const { money, setMoney } = useContext(MoneyContext);
  const { showForm, setShowForm, setFormCategory } = useContext(FormContext);

  const handleEditClick = () => {
    setShowForm(true);
    setFormCategory("Expenses");
  };

  const handleButton = () => {
    const currentTransaction = transactions.findIndex((item) => id === item.id);
    const newBalance = money.balance + Number(amount);
    const newExpense = money.expense - Number(amount);

    transactions.splice(currentTransaction, 1);
    setTransactions([...transactions]);
    setMoney({ balance: newBalance, expense: newExpense });
  };
  const selectIcon = () => {
    if (category === "food") return foodIcon;
    if (category === "entertainment") return movieIcon;
    if (category === "travel") return travelIcon;
  };
  return (
    <>
      <div className="transactionTab__body">
        <div className="flex gap-5">
          <img className="transactionTab__image" src={selectIcon()} />
          <div className="">
            <p>{name}</p>
            <p className="transactionTab__date">{date}</p>
          </div>
        </div>

        <div className="change__btn ">
          <p style={{ color: "orange" }}>₹{amount}</p>
          <button className="delete__btn" onClick={handleButton}>
            <img src={deleteIcon} alt="" />
          </button>
          <button className="edit__btn" onClick={() => handleEditClick()}>
            <img src={editIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="border hidden">
        {true ? (
          <ExpenseInput
            name={name}
            amount={amount}
            date={date}
            category={category}
            id={id}
          />
        ) : null}
      </div>
    </>
  );
};

export default TransactionTab;

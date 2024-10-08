import React, { useContext, useEffect, useState } from "react";
import FormContext from "../../Context/FormContext";
import MoneyContext from "../../Context/MoneyContext";
import TransactionContext from "../../Context/TransactionContext";
import "./ExpenseInput.css";

const ExpenseInput = () => {
  const { formCategory, setShowForm } = useContext(FormContext);
  const { money, setMoney } = useContext(MoneyContext);
  const { transactions, setTransactions } = useContext(TransactionContext);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    date: new Date().toISOString().split("T")[0],
    category: "",
  });

  const [balanceFormData, setBalanceFormData] = useState({ income: "" });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
    if (formCategory === "balance") {
      setMoney({
        ...money,
        balance: money.balance + Number(balanceFormData.income),
      });
    } else if (formCategory === "Expenses") {
      let newExpense = money.expense + Number(formData.price);
      let newBalance = money.balance - Number(formData.price);

      if (newBalance < 0) {
        alert("Out of Balance");
        return;
      }

      let newTransaction = { ...formData, id: Date.now() };
      setMoney({ balance: newBalance, expense: newExpense });
      setTransactions([...transactions, newTransaction]);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      date: new Date().toISOString().split("T")[0],
      category: "",
    });
    setShowForm(false);
  };


  return (
    <form onSubmit={handleSubmit}>
      {formCategory === "Expenses" ? (
        <div className="expenseInput__body">
          <h2 className="font-bold text-3xl">Add Expenses</h2>
          <div className="expenseInput__items">
            <input
              type="text"
              name="name"
              placeholder="Expense"
              required
              onChange={handleChange}
              value={formData.name}
              className="inputItems"
            />
            <input
              type="text"
              name="price"
              placeholder="Enter the Amount"
              onChange={handleChange}
              value={formData.price}
              className="inputItems"
            />
          </div>
          <div className="expenseInput__items">
            <select
              name="category"
              id="category"
              value={formData.category}
              placeholder="Select Category"
              onChange={handleChange}
              className="inputItems"
            >
              <option value="">Select Category</option>
              <option value="food">Food</option>
              <option value="entertainment">Entertainment</option>
              <option value="travel">Travel</option>
            </select>
            <input
              className="inputItems"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="btn__container">
            <button className="expense__btn" type="submit">
              Add Expense
            </button>
            <button className="cancel__btn" type="button" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="balanceInput__body">
          <input
            type="number"
            className="inputItems"
            onChange={(e) =>
              setBalanceFormData({ income: Number(e.target.value) })
            }
            placeholder="Income Amount"
            name="income"
            value={balanceFormData.income}
            autoFocus
            required
          />
          <div className="balanceBtn_container">
            <button className="balance__btn" type="submit">
              Add Balance
            </button>
            <button className="cancel__btn" type="button" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ExpenseInput;

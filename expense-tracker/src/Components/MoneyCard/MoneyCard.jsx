import React, { useContext } from "react";
import "./MoneyCard.css";
import FormContext from "../../Context/FormContext";

const MoneyCard = ({ text, data }) => {
  const { setShowForm, setFormCategory } = useContext(FormContext);
  const isExpense = text === "Expenses";

  const handleClick = () => {
    setShowForm(true);
    setFormCategory(text);
  };

  return (
    <div className="moneyCard__body">
      <h3 className="moneyCard__heading">
        {isExpense ? "Expenses" : "Wallet Balance"}:
        <span
          className={`moneyCard__balance ${isExpense ? "text-orange" : "text-green"}`}
        >
          ₹{data}
        </span>
      </h3>
      <button
        onClick={handleClick}
        className={`moneyCard__button ${isExpense ? "back-red" : "back-green"}`}
      >
        <p className="moneyCard__button__text">
          {isExpense ? "+ Add Expense" : "+ Add Balance"}
        </p>
      </button>
    </div>
  );
};

export default MoneyCard;

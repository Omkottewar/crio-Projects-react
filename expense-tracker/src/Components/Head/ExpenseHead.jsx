import React, { useContext } from 'react';
import MoneyCard from '../MoneyCard/MoneyCard';
import GraphDisplay from '../GraphDisplay/GraphDisplay';
import './ExpenseHead.css';

const ExpenseHead = ({ balance, expense }) => {
  
  return (
    <header className="app__head">
      <MoneyCard data={balance} text="Balance" />
      <MoneyCard data={expense} text="Expenses" />
      <GraphDisplay />
    </header>
  );
};

export default ExpenseHead;

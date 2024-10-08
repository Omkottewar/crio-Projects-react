import React, { useContext, useEffect, useState } from 'react';
import TransactionContext from '../../Context/TransactionContext';
import TransactionTab from '../TransactionTabs/TransactionTab';
import './RecentTransactions.css';
import Pagination from './Pagination';

const RecentTransactions = () => {
  const { transactions } = useContext(TransactionContext);
  const [pages, setPages] = useState({ currentPage: 1, totalPages: 1 });

  useEffect(() => {
    setPages({ currentPage: 1, totalPages: Math.ceil(transactions.length / 5) });
  }, [transactions]); 

  const displayTransactions = () => {
    if (transactions && transactions.length) {
      let startIndex = 5 * (pages.currentPage - 1);
      let endIndex = Math.min(5 * pages.currentPage, transactions.length);
      return transactions.slice(startIndex, endIndex).map((transaction, index) => (
        <TransactionTab 
          key={index}
          name={transaction.name}
          date={transaction.date}
          amount={transaction.price}
          category={transaction.category}
          id={transaction.id}
        />
      ));
    }
    return <p>No transactions available</p>;
  };

  const updatePage = (direction) => {
    const { currentPage, totalPages } = pages;
    if (direction === "right" && currentPage < totalPages) {
      setPages({ ...pages, currentPage: currentPage + 1 });
    } else if (direction === "left" && currentPage > 1) {
      setPages({ ...pages, currentPage: currentPage - 1 });
    }
  };

  return (
    <div className='recentTransactions__body'>
      <div className='display__area'>{displayTransactions()}</div>
      <div className="pagination">
        <Pagination pages={pages} updatePage={updatePage} />
      </div>
      <div className="relative bottom-[100px] opacity-100 left-[750px]">
      </div>
    </div>
  );
};

export default RecentTransactions;

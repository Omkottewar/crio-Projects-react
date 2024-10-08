import React from "react";
import "./Body.css";
import RecentTransactions from "../RecentTransactions/RecentTransactions";
import TopExpenses from "../TopExpenses/TopExpenses";

const Body = () => {
  return (
    <div className="app-body">
      <section>
        <h1 className="heading">Recent Transactions</h1>
        <RecentTransactions />
      </section>
      <section>
        <h1 className="heading">Top Expenses</h1>
        <TopExpenses />
      </section>
    </div>
  );
};

export default Body;

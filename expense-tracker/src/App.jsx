import { useEffect, useState } from "react";
import "./index.css";
import ExpenseHead from "./Components/Head/ExpenseHead";
import Navbar from "./Components/Navbar/Navbar";
import MoneyContext from "./Context/MoneyContext";
import TransactionContext from "./Context/TransactionContext";
import FormContext from "./Context/FormContext";
import ExpenseInput from "./Components/ExpenseForm/ExpenseInput";
import { dummyData } from "./sampleTransactions";
import Body from "./Components/Body/Body";

function App() {
  const [money, setMoney] = useState({
    balance: 400,
    expense: 4600,
  });

  const [transactions, setTransactions] = useState(dummyData);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [formCategory, setFormCategory] = useState(false);

  useEffect(() => {
    if (isInitialRender) {
      onRender();
      setIsInitialRender(false);
    }
  }, [isInitialRender]);

  useEffect(() => {
    if (!isInitialRender) {
      localStorage.setItem("allData", JSON.stringify({ money, transactions }));
    }
  }, [money, transactions, isInitialRender]);

  const onRender = () => {
    const localData = localStorage.getItem("allData");
    if (localData) {
      const { money, transactions } = JSON.parse(localData);
      setMoney(money);
      setTransactions(transactions);
    }
  };

  localStorage.removeItem("allData")

  return (
    <div className="main__body">
      <MoneyContext.Provider value={{ money, setMoney }}>
        <TransactionContext.Provider value={{ transactions, setTransactions }}>
          <FormContext.Provider
            value={{ setFormCategory, formCategory, showForm, setShowForm }}
          >
            <Navbar />
            <ExpenseHead balance={money.balance} expense={money.expense} />
            {showForm ? <ExpenseInput /> : null}
            <Body />
          </FormContext.Provider>
        </TransactionContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
}

export default App;

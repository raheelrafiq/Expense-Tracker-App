import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const Head = () => {
    const { transactions } = useContext(GlobalContext);
    const transactionAmount = transactions.map(transaction => transaction.amount);
    const balance = transactionAmount.reduce((acc, item) => (acc += item), 0);

    const income = Math.abs(transactionAmount
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2));
    console.log(income)

    const expense = Math.abs(transactionAmount
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2));
    return (
        <div className="head">
            <h1>Expense Tracker App</h1>
            <h2>With React</h2>

            <div className="balance bold">
                <h3>Balance</h3>
                <h3 className={balance < 0 ? 'red' : 'green'}>Rs {balance}</h3>
            </div>

            <div className="income-expense">

                <div className="income">
                    <h3>Income</h3>
                    <h3 className="green">Rs {income}</h3>
                </div>

                <div className="expense">
                    <h3>Expense</h3>
                    <h3 className="red">Rs {expense}</h3>
                </div>

            </div>
        </div>
    )
}
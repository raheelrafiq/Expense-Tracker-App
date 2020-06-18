import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const Summary = () => {
    const { transactions } = useContext(GlobalContext);
    const transactionAmount = transactions.map(transaction => transaction.amount);
    
    const income = Math.abs(transactionAmount
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => ( acc += transaction ), 0)
        .toFixed(2));
        console.log(income)

        const expense = Math.abs(transactionAmount
            .filter(transaction => transaction < 0)
            .reduce((acc, transaction) => ( acc += transaction ), 0)
            .toFixed(2));
    return (
        <div>
            
            <div>
                <h3>Income</h3>
                <h5>{income}</h5>
            </div>
            <div>
                <h3>Expense</h3>
    <h5>{expense}</h5>
            </div>
        </div>
    )
}
import React, {useContext} from 'react';
import {GlobalContext} from '../context/globalState';
import {Transaction} from './Transaction';

export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext)
    return(
        <div className="transaction">
        <h2 className="history">Transaction History</h2>
        <ul className="transaction-list">
            {transactions.map(transaction => (
                <Transaction key={transaction.id} transaction = {transaction} />
            ))}
        </ul>
        </div>
    )
}
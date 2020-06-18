import React, {useContext} from 'react';
import {GlobalContext} from '../context/globalState';
import {Transaction} from './Transaction';

export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext)
    return(
        <div>
        <h3>Transaction History</h3>
        <ul>
            {transactions.map(transaction => (
                <Transaction key={transaction.id} transaction = {transaction} />
            ))}
        </ul>
        </div>
    )
}
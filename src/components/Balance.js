import React, {useContext} from 'react';
import {GlobalContext} from '../context/globalState';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const transactionAmount = transactions.map(transaction => transaction.amount);
    const balance = transactionAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return(
        <div>
        <h3>Balance</h3>
    <h2>{balance}</h2>
        </div>
    )
}
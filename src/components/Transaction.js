import React, {useContext} from 'react';
import {GlobalContext} from '../context/globalState';

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount > 0 ? '+' : '-';
    // const transactionType = transaction.amount > 0 ? 'plus' : 'minus';
    const {delTransaction} = useContext(GlobalContext);
    return (
        <li>
            {transaction.description}
            {sign}{transaction.amount}
            <button onClick={()=> delTransaction(transaction.id)}>X</button>
        </li>
    )
}
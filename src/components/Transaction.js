import React, {useContext} from 'react';
import {GlobalContext} from '../context/globalState';
import Delete from '../images/delete.png';

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount > 0 ? '+' : '-';
    // const transactionType = transaction.amount > 0 ? 'plus' : 'minus';
    const {delTransaction} = useContext(GlobalContext);
    return (
        <li>
            <input onClick={()=> delTransaction(transaction.id)} type="image" src={Delete} alt="Delete" class="deletebutton" />
            {transaction.description}
            <span className={sign === '+' ? 'green' : 'red'}>Rs {transaction.amount}</span>
        </li>
    )
}
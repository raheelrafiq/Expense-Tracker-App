import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const AddTransaction = () => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState('');

    const{addTransaction} = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        if (Numbe(amount) === 0) {
            alert("Enter Amount");
            return false;
        }

        const newTransaction = {
            id: new Date().getTime(),
            description,
            amount: +amount
        };
        addTransaction(newTransaction);
    }
    return(
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div>
                <label htmlFor="description">
                    Description
                </label>
                <input 
                type="text" 
                id="description" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Transaction Detail"/>
                </div>
                <div>
                <label htmlFor="newAmount">
                    Amount
                </label>
                <input 
                type="number" 
                id="newAmount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Transaction Amount"/>
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}
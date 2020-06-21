import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const AddTransaction = () => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState('');

    const{addTransaction} = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        if (Number(amount) === 0) {
            alert("Enter Amount");
            return false;
        }

        const newTransaction = {
            id: new Date().getTime(),
            description,
            amount: +amount
        };
        addTransaction(newTransaction);

        setDescription('');
        setAmount('')
    }
    return(
        <div>
            <form onSubmit={onSubmit}  className="form">
                <div>
                <input 
                type="text" 
                id="description"
                className="input_task"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description here...."/>
                
                </div>
                <div>
                <input 
                type="number" 
                id="newAmount"
                className="input_task"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount here.... ( Negative For Expense )"/>
                </div>
                <input type="submit" value="Add Transaction" id="submit" />
            </form>
        </div>
    )
}
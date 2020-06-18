import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: []
}
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function delTransaction(id) {
        dispatch({
            type: 'DeleteTransaction',
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'AddTransaction',
            payload: transaction
        });
    }
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        } >
            {children}
        </GlobalContext.Provider >
    );
}
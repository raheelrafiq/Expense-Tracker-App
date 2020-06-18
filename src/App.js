import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {Summary} from './components/Summary';
import {TransactionHistory} from './components/TransactionHistory';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/globalState'

function App() {
  return (
    <GlobalProvider>
    <div>
      <Header />
      <Balance />
      <Summary />
      <TransactionHistory />
      <AddTransaction />
    </div>
    </GlobalProvider>
  );
}

export default App;

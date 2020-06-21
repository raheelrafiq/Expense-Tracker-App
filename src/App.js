import React from 'react';
import './App.css';
import {Head} from './components/Head';
import {TransactionHistory} from './components/TransactionHistory';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/globalState'

function App() {
  return (
    <GlobalProvider>
    <div className="main">
      <Head className="head" />
      <br /><br />
      <AddTransaction />
      <TransactionHistory />
    </div>
    </GlobalProvider>
  );
}

export default App;

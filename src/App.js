import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { GlobalProvider } from './context/globalState';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { TransactionForm } from './components/TransactionForm';
function App() {
  // 123
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <TransactionForm />
      </div>
    </GlobalProvider>
  );
}

export default App;

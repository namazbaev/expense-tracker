import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { GlobalProvider } from './context/globalState';
import { TransactionList } from './components/TransactionList';
import { TransactionForm } from './components/TransactionForm';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <TransactionList />
        <TransactionForm />
      </div>
    </GlobalProvider>
  );
}

export default App;

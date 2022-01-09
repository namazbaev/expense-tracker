import { useContext } from 'react'
import { GlobalContext } from '../context/globalState'
export const IncomeExpenses = () => {
  const { transaction } = useContext(GlobalContext)
  const incomeArr = transaction.filter(item => item.amount > 0)
  const expenseArr = transaction.filter(item => item.amount < 0)
  const incomeTransaction = incomeArr.reduce((total, element) => total + element.amount, 0)
  const expenseTransaction = expenseArr.reduce((total, element) => total + element.amount, 0)
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${incomeTransaction}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expenseTransaction}</p>
      </div>
    </div>
  )
}

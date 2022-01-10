import { useContext } from 'react'
import { IncomeExpenses } from './IncomeExpenses'
import { GlobalContext } from '../context/globalState'
export const Balance = () => {
  const { transaction } = useContext(GlobalContext)
  const amounts = transaction.map(item => item.amount)
  const total = amounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
  const expense = (
    amounts
      .filter(item => item < 0)
      .reduce((acc, item) => (acc += item), 0)
    * -1).toFixed(2)
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
      <IncomeExpenses income={income} expense={expense} />
    </>
  )
}
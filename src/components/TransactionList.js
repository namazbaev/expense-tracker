import { useContext } from 'react'
import { GlobalContext } from '../context/globalState'
import { Transaction } from './Transaction'
export const TransactionList = () => {
  const { transaction } = useContext(GlobalContext)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.length > 0 ? transaction.map((item, i) => {
          return <Transaction key={i} item={item} />
        }) : 'Ooops!'}

      </ul>
    </>
  )
}

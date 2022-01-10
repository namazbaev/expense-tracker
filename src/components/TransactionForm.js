import { v4 as uuidv4 } from "uuid"
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/globalState'
export const TransactionForm = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const { addTransaction } = useContext(GlobalContext)
  const add = e => {
    e.preventDefault()
    const newObj = {
      id: uuidv4(),
      text, amount: +amount
    }
    if (text.trim() && amount !== 0) {
      addTransaction(newObj)
      setText('')
      setAmount(0)
    } else {
      alert("Please fill in the blank lines...")
    }
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={add}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button onClick={add} className="btn">Add transaction</button>
      </form>
    </>
  )
}

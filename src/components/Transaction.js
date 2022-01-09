import React from 'react'

export const Transaction = ({ item }) => {
  return (
    <li className="minus">
      {item.text} <span>${item.amount}</span><button className="delete-btn">x</button>
    </li>
  )
}

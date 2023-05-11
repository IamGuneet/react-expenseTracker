import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


const IncomeExpense = () => {

  const {transactions}= useContext(GlobalContext)

  const amount = transactions.map(transaction => transaction.amount)
  const total = amount.reduce((acc,item) => (acc+= item),0).toFixed(2)

  const income =  amount.reduce((acc,item) => (acc+= item >0?item:0),0).toFixed(2)
  const expense = income - total


  return (
    <div>
         <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+₹{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-₹{expense}</p>
        </div>
      </div>

    </div>
  )
}

export default IncomeExpense

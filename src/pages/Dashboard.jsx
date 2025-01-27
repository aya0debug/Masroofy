import React, { useState } from 'react'
import bag from "../assets/bag.svg"
import "./Dashboard.css"
import CircularProgress from '../components/CircularProgress';
import ExpensesVsIncomeChart from '../components/Chart';
import Overview from '../components/Overview';
import Budgetpie from '../components/Budgetpie';
import Transaction from '../components/Transaction';
import { useSelector } from 'react-redux';
import { getLast6Transactions } from '../state/reducers/transactionReducer';

function Dashboard() {
  const transactions = useSelector(getLast6Transactions);
  return (
    <div className='dashboard'>
        <p className='textbig'>Financial Overview</p>
        <Overview/>
        <div className='row'>
        <div className='transactions'>
        <p className='textbig'>Recent Transactions</p>
        <div className='transs'>
          {transactions.map((transaction,index)=>
          <Transaction key={index} transaction={transaction} index={index}/>
          )}
        </div>
        </div>
        <div className='column'>
           <p className='textbig'>Budget Insights</p>
           <Budgetpie/>
           <p className='textbig'>Budget Insights</p>
           <div className="chart"><ExpensesVsIncomeChart/></div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard

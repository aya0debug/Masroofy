import React, { useState } from 'react'
import LineChart from '../components/LIneChart'
import ExpensesVsIncomeChart from '../components/Chart'
import "./Report.css"
import Budgetpie from '../components/Budgetpie'
import Bar from '../components/Bar'
import BarChart from '../components/Bar'

function Report() {
    const [selected, setSelected] = useState(0);
    const handleClick = (index) => {
        setSelected(index);
      };
  return (
    <div className='report'>
        <div className='row'>
            <div className='colunm'>
                <p className='title'>income vs expense</p>
                <LineChart/>
            </div>
            <div className='colunm'>
                <p className='title'>income vs expense</p>
                <ExpensesVsIncomeChart />
            </div>
        </div>
        <div className='row'>
            <div className='colunm'>
                <p className='title'>income categories</p>
                <Budgetpie/>
            </div>
            <div className='colunm'>
                <p className='title'>expense categories</p>
                <Budgetpie/>
            </div>
        </div>
        <div className='row'>
            <div className='colunm'>
            <div className='bar'>
          <p className='title'>Categories List</p>
          <button className={selected === 0 ? 'expense selected' : 'expense'} onClick={() => handleClick(0)}>Expense</button>
          <button className={selected === 1 ? 'income selected' : 'income'} onClick={() => handleClick(1)}>Income</button>
        </div>
                <BarChart/>
            </div>
        </div>
    </div>
  )
}

export default Report
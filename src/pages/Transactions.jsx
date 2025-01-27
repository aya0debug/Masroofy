import React, { useEffect, useState } from 'react';
import Transaction from '../components/Transaction';
import "./Transactions.css";
import Search from '../components/Search';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import { useSelector } from 'react-redux';
import AddTransaction from './AddTransaction';

function Transactions() {
  const data = useSelector((state) => state.transactions.transactions);
  const [transactions, setTransactions] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    setTransactions(data);
  }, [data]);

  return (
    <div className='transactions'>
      <div className='list'>
        <div className='bar'>
          <p className='title'>Transactions List</p>
          <button className='income selected' onClick={handleOpenModal}>Add Transaction</button>
        </div>
        <AddTransaction isOpen={isModalOpen} onClose={handleCloseModal} />
        <div className='colum'>
          {transactions.map((tran, index) => (
            <Transaction key={index} transaction={tran} index={index} />
          ))}
        </div>
      </div>
      <div className='column'>
        <p className='title'>Search Transactions</p>
        <Search />
        <p className='title'>Filter Transactions</p>
        <Filter />
        <p className='title'>Sort Transactions</p>
        <Sort />
      </div>
    </div>
  );
}

export default Transactions;

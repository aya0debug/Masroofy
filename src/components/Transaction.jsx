import React, { useState } from 'react';
import bag from "../assets/bag.svg";
import { useDispatch, useSelector } from 'react-redux';
import EditTransaction from '../pages/EditTransaction';
import { deleteTransaction } from '../state/actions/transactionActions';

function Transaction({ transaction, index }) {
  const data = useSelector((state) => state.categories.categories); 
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const get = (id) => data.find((c) => c.id === id);

  const [tran, setTransaction] = useState(-1);

  return (
    <div className={tran !== index ? "transaction" : "transaction selected"} onMouseEnter={() => setTransaction(index)} onMouseLeave={() => setTransaction(-1)}>
      <EditTransaction isOpen={isModalOpen} onClose={handleCloseModal} id={transaction.id} />
      <div className='curve'></div>
      <div className='turn' style={{ background: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357.5 154.5"%3E%3Cpath d="M0.5 -10.5L315 -36L357.5 154.5C357.5 154.5 294 69.5 228 42.5C162 15.5 0.5 -10.5 0.5 -10.5Z" fill="%23${get(transaction.categoryID).color}" /%3E%3C/svg%3E') no-repeat center` }}></div>
      <p className='type'>{transaction.t}</p>
      <p className='value'>Amount earned {transaction.value}k</p>
      <p className='note'>Note</p>
      <p className='text'>{transaction.note}</p>
      <p className='date'>Date: {transaction.date}</p>
      <button className='edit' onClick={handleOpenModal}>Edit</button>
      <button className='delete' onClick={() => dispatch(deleteTransaction(transaction.id))}>Delete</button>
      <p className='category'>{get(transaction.categoryID).name}</p>
      <img className='time' src={bag} alt="time" />
      <img className='caty' src={get(transaction.categoryID).icon} alt="category" />
    </div>
  );
}

export default Transaction;

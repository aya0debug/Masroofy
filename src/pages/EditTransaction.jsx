import React, { useEffect, useState } from 'react';
import "./AddTransaction.css";
import { updateTransaction } from '../state/actions/transactionActions';
import { useDispatch, useSelector } from 'react-redux';

function EditTransaction({ isOpen, onClose, id }) {
  if (!isOpen) return null;
  
  const data = useSelector((state) => state.transactions.transactions); 
  const [type, setType] = useState(0);
  const types = ["income", "expense"];
  const categories = useSelector((state) => state.categories.categories); 
  const dispatch = useDispatch();
  const caties = type === 0 ? categories.filter((item) => item.type === "income") : categories.filter((item) => item.type === "expense");
  const [value, setValue] = useState('');
  const [note, setNote] = useState('');
  const [categoryID, setCategoryID] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    const t = type === 0 ? "income" : "expense";
    dispatch(updateTransaction(id, { note, value, t, categoryID }));
    setNote('');
    setValue('');
    setType(0);
    setCategoryID(0);
    onClose();
  };

  useEffect(() => {
    const tran = data.find((c) => c.id === id);
    setType(tran.t === "income" ? 0 : 1);
    setValue(tran.value);
    setNote(tran.note);
    setCategoryID(tran.categoryID);
  }, [id, data]);

  return (
    <div className='black'>
      <div className='addtransaction'>
        <div className='container'>
          <div className='wave2'></div>
          <p className='title'>Edit Transaction</p>
          <p className='subtitle'>Types</p>
          <div className='row'>
            {types.map((item, index) => (
              <div
                key={index}
                className={type === index ? 'type selected' : "type"}
                onClick={() => setType(index)}
              >
                <img className='icon' alt="" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className='subtitle'>Categories</p>
          <div className='cates'>
            {caties.map((item) => (
              <div
                key={item.id}
                className={item.id === categoryID ? 'category selected' : "category"}
                onClick={() => setCategoryID(item.id)}
              >
                <div className='color' style={{ backgroundColor: `#${item.color}` }}></div>
                <p className='name'>{item.name}</p>
              </div>
            ))}
          </div>
          <p className='subtitle'>Note</p>
          <div className='erea'>
            <img className='icon' alt="" />
            <textarea
              type="text"
              id="value"
              value={note}
              placeholder='Note'
              rows="5"
              cols="10"
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>
          <p className='subtitle'>Amount</p>
          <div className='search'>
            <div className='bar'>
              <img className='icon' alt="" />
              <input
                type="number"
                id="value"
                value={value}
                placeholder='Amount'
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <button onClick={submit}>
              <img className='icon' alt="" />Edit
            </button>
          </div>
          <button className='cancel' onClick={onClose}>
            <img className='icon' alt="" />Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTransaction;

import React, { useState } from 'react'
import "./AddTransaction.css"
import { addTransaction } from '../state/actions/transactionActions';
import { useDispatch, useSelector } from 'react-redux';


function AddTransaction({isOpen,onClose}) {
  if (!isOpen) return null;
      const [type,setType]=useState(0);
      const types=["income","expense"]
      const categories = useSelector((state) => state.categories.categories); 
      const dispatch = useDispatch();
      const caties = type === 0 ? categories.filter((item)=>item.type=="income") : categories.filter((item)=>item.type=="expense");
      const [value, setValue] = useState('');
      const [note, setNote] = useState('');
      const [categoryID,setCategoryID] = useState(0);
      console.log(categories)
      const submit=(e)=>{
        console.log("...................")
        let t=type==0?"income":"expense";
        e.preventDefault(); 
        dispatch(addTransaction({ note, value,t, categoryID })); 
        setNote(''); 
        setValue(''); 
        setType(0); 
        setCategoryID(0);
        onClose();
      }
    return (
      <div className='black'>
      <div className='addtransaction'>
        <div className='container'>
        <div className='wave2'></div>
        <p className='title'>Add Transaction</p>
          <p className='subtitle'>Types</p>
          <div className='row'>
              {types.map((item,index)=>
              <div key={index} className={type==index?'type selected':"type"} onClick={(e) => setType(index)}>
                 <img className='icon'></img>
                 <p>{item}</p>
              </div>
              )}
          </div>
          <p className='subtitle'>Categories</p>
          <div className='cates'>
                  {caties.map((item,index)=>
                      <div className={item.id==categoryID?'category':"category selected"} key={item.id} onClick={()=>setCategoryID(item.id)}>
                          <div className='color' style={{backgroundColor:`#${item.color}`}}></div>
                          <p className='name'>{item.name}</p>
                      </div>
                  )}
          </div>
          <p className='subtitle'>Note</p>
            <div className='erea'>
                <img className='icon'></img>
                <textarea type="text" id="value" value={note} placeholder='Note'rows="5" cols="10" onChange={(e) => setNote(e.target.value)}></textarea>
            </div>
          <p className='subtitle'>Amount</p>
          <div className='search'>
              <div className='bar'>
                  <img className='icon'></img>
                  <input type="number" id="value" value={value} placeholder='Amount' onChange={(e) => setValue(e.target.value)}></input>
              </div>
              <button onClick={(e)=>submit(e)}><img className='icon'></img>add</button>
          </div>
          <button className='cancel' onClick={()=>onClose()}><img className='icon'></img>cancel</button>
      </div>
      </div></div>
    )
}

export default AddTransaction
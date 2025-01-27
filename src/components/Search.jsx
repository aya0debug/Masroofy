import React, { useState } from 'react'

export default function Search() {
    const [value, setValue] = useState('');
    const search=(value)=>{
        
    }
  return (
    <div className='search'>
        <div className='bar'>
            <img className='icon'></img>
            <input 
            type="text"
            id="value"
            value={value}
            placeholder='search'
            onChange={(e) => setValue(e.target.value)}></input>
        </div>
        <button onClick={search()}><img className='icon'></img>search</button>
    </div>
  )
}

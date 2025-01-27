import React, { useState } from 'react'

function Sort() {
  const [value, setValue] = useState("");
  const types=["big to small","small to big"]
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
            placeholder='Amount'
            onChange={(e) => setValue(e.target.value)}></input>
        </div>
        <button onClick={search()}><img className='icon'></img>search</button>
      </div>
    )
}

export default Sort
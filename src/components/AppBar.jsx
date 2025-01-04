import React, { useState } from 'react'
import bag from "../assets/Bag.svg"
import history from "../assets/History.svg"
import home from "../assets/Home.svg"
import hut from "../assets/Hut.svg"
import presentation from "../assets/Presentation.svg"
import receipt from "../assets/Receipt.svg"
import transaction from "../assets/Transaction.svg"
import './AppBar.css'

const AppBar = () => {
  const [selected, setSelected] = useState(0);
  const [pages, setPages]=useState([
    {name:"Home",icon:home},
    {name:"Categories",icon:receipt},
    {name:"Add Transaction",icon:transaction},
    {name:"Transaction history",icon:history},
    {name:"Report",icon:presentation}
  ]);
  return (
    <div className='navbar'>
    <div>
      <div className='pages'>
      {pages.map((item,index) =>
        <div key={index} className={selected==index?"page selected":"page"} onClick={()=>setSelected(index)}>
          <img className='icon' src={item.icon}></img>
          <p>{item.name}</p>
        </div>
      )}</div>
    </div>
    </div>
  )
}

export default AppBar
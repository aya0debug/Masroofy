import React, { useState } from 'react'
import bag from "../assets/Bag.svg"
import history from "../assets/History.svg"
import home from "../assets/Home.svg"
import hut from "../assets/Hut.svg"
import presentation from "../assets/Presentation.svg"
import receipt from "../assets/Receipt.svg"
import transaction from "../assets/Transaction.svg"
import './AppBar.css'
import { Link } from 'react-router-dom'

const AppBar = () => {
  const [selected, setSelected] = useState(0);
  const [pages, setPages]=useState([
    {name:"Home",icon:home,path:"/"},
    {name:"Categories",icon:receipt,path:"/categories"},
    {name:"Transaction history",icon:history,path:"/transactions"},
    {name:"Report",icon:presentation,path:"/report"}
  ]);
  return (
    <div className='navbar'>
    <div>
      <div className='pages'>
      {pages.map((item,index) =>
        <Link key={index} className={selected==index?"page selected":"page"} onClick={()=>setSelected(index)} to={item.path}>
          <img className='icon' src={item.icon}></img>
          <p>{item.name}</p>
        </Link>
      )}</div>
    </div>
    </div>
  )
}

export default AppBar
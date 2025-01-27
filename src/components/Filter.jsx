import React, { useState } from 'react'

function Filter() {
    const [type,setType]=useState(0);
    const [date, setDate] = useState({year1:"",month1:"",day1:"",year2:"",month2:"",day2:""});
    const types=["all","income","expense"]
    const income=[{name:"all",color:"#fff"},{name:"all",color:"#fff"},{name:"all",color:"#fff"},{name:"all",color:"#fff"},{name:"all",color:"#fff"},{name:"all",color:"#fff"},{name:"all",color:"#fff"},{name:"all",color:"#fff"},{name:"all",color:"#fff"},{name:"all",color:"#fff"},]
    const expense=[{name:"not all",color:"#000"},{name:"not all",color:"#000"},{name:"not all",color:"#000"},{name:"not all",color:"#000"},{name:"not all",color:"#000"},{name:"not all",color:"#000"},{name:"not all",color:"#000"},{name:"not all",color:"#000"},{name:"not all",color:"#000"},]
    const categories = type === 0 ? [...income, ...expense] : type === 1 ? income : expense;
    const [value, setValue] = useState('');
    const search=(value)=>{}
  return (
    <div className='container'>
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
                {categories.map((item,index)=>
                    <div className={item.selecte==false?'category':"category selected"} key={index} >
                        <div className='color' style={{backgroundColor:`${item.color}`}}></div>
                        <p className='name'>{item.name}</p>
                    </div>
                )}
        </div>
        <p className='subtitle'>Date</p>
        <div className='row'>
            <p>from</p>
            <div  className={"date"} >
               <img className='icon'></img>
               <input type="number" id="year1" value={date.year1} placeholder='year' onChange={(e) => setDate({...date , year1:e.target.value})} required/>
            </div>
            <div  className={"date"} >
               <img className='icon'></img>
               <input type="number" id="month1" value={date.month1} placeholder='month' onChange={(e) => setDate({...date , month1:e.target.value})} required/>
            </div>
            <div  className={"date"} >
               <img className='icon'></img>
               <input type="number" id="day1" value={date.day1} placeholder='day' onChange={(e) => setDate({...date , day1:e.target.value})} required/>
            </div>
            <p>to</p>
            <div  className={"date"} >
               <img className='icon'></img>
               <input type="number" id="year2" value={date.year2} placeholder='year' onChange={(e) => setDate({...date , year2:e.target.value})} required/>
            </div>
            <div  className={"date"} >
               <img className='icon'></img>
               <input type="number" id="month2" value={date.month2} placeholder='month' onChange={(e) => setDate({...date , month2:e.target.value})} required/>
            </div>
            <div  className={"date"} >
               <img className='icon'></img>
               <input type="number" id="day2" value={date.day2} placeholder='day' onChange={(e) => setDate({...date , day2:e.target.value})} required/>
            </div>
        </div>
        <p className='subtitle'>Amount</p>
        <div className='search'>
            <div className='bar'>
                <img className='icon'></img>
                <input type="text" id="value" value={value} placeholder='Amount' onChange={(e) => setValue(e.target.value)}></input>
            </div>
            <button onClick={search()}><img className='icon'></img>search</button>
        </div>
    </div>
  )
}

export default Filter
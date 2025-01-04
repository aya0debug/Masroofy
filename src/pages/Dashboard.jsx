import React, { useState } from 'react'
import bag from "../assets/bag.svg"
import "./Dashboard.css"
import CircularProgress from '../components/CircularProgress';
import ExpensesVsIncomeChart from '../components/Chart';

function Dashboard() {
    const [selected, setSelected] = useState(0);
    const [transaction, setTransaction] = useState(-1);
    const [categories, setCategories] = useState([{name:"food",persent:20,selecte:false},{name:"food",persent:20,selecte:false},{name:"food",persent:20,selecte:false},{name:"food",persent:20,selecte:false},{name:"food",persent:20,selecte:false},]);
    const updateItemName = (name) => {
        // Create a new list with the updated name
        const updatedItems = categories.map(item => 
          item.name === name ? { ...item, selecte: !item.selecte } : item
        );
        
        // Set the updated list as the new state
        setCategories(updatedItems);
      };
  return (
    <div className='dashboard'>
        <p className='textbig'>Financial Overview</p>
        <div className='overviews'>
            <div className={selected==0?"view selected":"view"} onMouseEnter={()=>setSelected(0)} onMouseLeave={()=>setSelected(0)}>
            <CircularProgress progress={70} size={80} thikeness={30} top="25px" left="170px" opacity={selected==0?1:0}/>
             <img className='icon' src={bag}/>
             <p className='title'>Total Income</p>
             <p className='value'>10.2k</p>
             <div className='cloud' id='cloud1'><p>Reached 75%</p></div>
             <div className='cloud' id="cloud2"><p>Reamining 25%</p></div>
             <div className='date'><p>Date: 2025 Janury  v</p></div>
            </div>
            <div className={selected==1?"view selected":"view"} onMouseEnter={()=>setSelected(1)} onMouseLeave={()=>setSelected(0)}>
            <CircularProgress progress={50} size={80} thikeness={30} top="25px" left="170px" opacity={selected==1?1:0}/>
             <img className='icon' src={bag}/>
             <p className='title'>Total Income</p>
             <p className='value'>10.2k</p>
             <div className='cloud' id='cloud1'><p>Reached 75%</p></div>
             <div className='cloud' id="cloud2"><p>Reamining 25%</p></div>
             <div className='date'><p>Date: 2025 Janury  v</p></div>
            </div>
            <div className={selected==2?"view selected":"view"} onMouseEnter={()=>setSelected(2)} onMouseLeave={()=>setSelected(0)}>
            <CircularProgress progress={50}  size={80} thikeness={30} top="25px" left="170px" opacity={selected==2?1:0}/>
             <img className='icon' src={bag}/>
             <p className='title'>Total Income</p>
             <p className='value'>10.2k</p>
             <div className='cloud' id='cloud1'><p>Reached 75%</p></div>
             <div className='cloud' id="cloud2"><p>Reamining 25%</p></div>
             <div className='date'><p>Date: 2025 Janury  v</p></div>
            </div>
            <div className={selected==3?"view selected":"view"} onMouseEnter={()=>setSelected(3)} onMouseLeave={()=>setSelected(0)}>
            <CircularProgress progress={50} size={80} thikeness={30} top="25px" left="170px" opacity={selected==3?1:0}/>
             <img className='icon' src={bag}/>
             <p className='title'>Total Income</p>
             <p className='value'>10.2k</p>
             <div className='cloud' id='cloud1'><p>Reached 75%</p></div>
             <div className='cloud' id="cloud2"><p>Reamining 25%</p></div>
             <div className='date'><p>Date: 2025 Janury  v</p></div>
            </div>
        
        </div>
        <div className='row'>
        <div className='transactions'>
        <p className='textbig'>Recent Transactions</p>
            <div className={transaction!=0?"transaction":"transaction selected"} onMouseEnter={()=>setTransaction(0)} onMouseLeave={()=>setTransaction(-1)}>
                <div className='curve'></div>
                <div className='turn'></div>
                <p className='type'>Income</p>
                <p className='value'>Amount earened 10k</p>
                <p className='note'>note</p>
                <p className='text'>text</p>
                <p className='date'>date</p>
                <p className='category'>category</p>
                <img className='time' src={bag}/>
                <img className='caty' src={bag}/>
            </div>
            <div className={transaction!=1?"transaction":"transaction selected"} onMouseEnter={()=>setTransaction(1)} onMouseLeave={()=>setTransaction(-1)}>
                <div className='curve'></div>
                <div className='turn'></div>
                <p className='type'>Income</p>
                <p className='value'>Amount earened 10k</p>
                <p className='note'>note</p>
                <p className='text'>text</p>
                <p className='date'>date</p>
                <p className='category'>category</p>
                <img className='time' src={bag}/>
                <img className='caty' src={bag}/>
            </div>
        </div>
        <div className='column'>
           <p className='textbig'>Budget Insights</p>
           <div className='row'>
            <div style={{margin:"10px 50px",padding:"20px", boxSizing:"border-box",width: "170px" ,height: "170px", borderRadius: "50%", background: "conic-gradient(#ff573340 0% 25%,   #33ff5740 25% 50%,   #3357ff40 50% 75%,  #ff33a140 75% 100%  )",position: "relative"}} >
            <div style={{width: "130px" ,height: "130px", borderRadius: "50%", background: "conic-gradient(#ff5733 0% 25%,   #33ff57 25% 50%,   #3357ff 50% 75%,  #ff33a1 75% 100%  )",position: "relative"}} ></div>
            </div>
            <div  className='column'>
               <p className='textbig'>Budget Insights</p> 
               <div className='categories'>
                {categories.map((item,index)=>
                <div className={item.selecte==false?'category':"category selected"} key={index} onClick={()=>updateItemName(item.name)}>
                    <div className='color'></div>
                    <p className='name'>{item.selecte==false?item.name:item.persent+"%"}</p>
                 </div>
                )}
               </div>
            </div>
           </div>
           <p className='textbig'>Budget Insights</p>
           <div className="chart"><ExpensesVsIncomeChart/></div>

        </div>
        </div>
    </div>
  )
}

export default Dashboard

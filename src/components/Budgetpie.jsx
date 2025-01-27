import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { calculateCategoryPercentage } from '../state/reducers/categoryReducer';

function Budgetpie() {
  const [selected,setSelected]=useState(0);
  const categories = useSelector((state) => state.categories.categories); 
  const [pie, setPie] = useState("");
  const [tooltip, setTooltip] = useState({ visible: false, category: "", percentage: 0, x: 0, y: 0, color: "" });

  const handlePie = (fade) => {
    let s = "";
    let p = 0;

    const totalExpenseBudget = categories
      .filter(category => category.type === 'expense')
      .reduce((total, category) => total + parseFloat(category.budget), 0);

    for (let i = 0; i < categories.length; i++) {
      const percentage = calculateCategoryPercentage(categories, categories[i].budget);
      if (fade) {
        s += `#${categories[i].color}40 ${p}% ${(percentage + p)}%, `;
      } else {
        s += `#${categories[i].color} ${p}% ${(percentage + p)}%, `;
      }
      p += percentage;
    }
    return s.slice(0, -2);
  };
  const method=()=>{
     return categories
      .filter(category => category.type === 'expense')
      .reduce((total, category) => total + parseFloat(category.budget), 0);
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect(); 
    const x = e.clientX - rect.left - rect.width / 2; 
    const y = e.clientY - rect.top - rect.height / 2; 
    const angle = (Math.atan2(y, x) * 180 / Math.PI + 90 + 360) % 360;

    let sumPercent = 0; 
    let index = -1;
    const totalExpenseBudget=method();

    for (let i = 0; i < categories.length; i++) { 
      sumPercent += (categories[i].budget / totalExpenseBudget) * 100; 
      if (angle <= sumPercent * 3.6) { 
        index = i;
        setTooltip({ 
          visible: true, 
          category: categories[i].name, 
          percentage: (categories[i].budget / totalExpenseBudget) * 100, 
          color: categories[i].color, 
          x: e.clientX, 
          y: e.clientY 
        }); 
        break; 
      } 
    }

    if (index === -1) { index = categories.length - 1; }

    let s = "";
    let p = 0;
    for (let i = 0; i < categories.length; i++) {
      if (i !== index) {
        s += `#${categories[i].color}40 ${p}% ${(categories[i].budget / totalExpenseBudget) * 100 + p}%, `;
      } else {
        s += `#${categories[i].color} ${p}% ${(categories[i].budget / totalExpenseBudget) * 100 + p}%, `;
      }
      p += (categories[i].budget / totalExpenseBudget) * 100;
    }
    setPie(s.slice(0, -2));
  };

  const handleMouseLeave = () => { 
    setTooltip({ ...tooltip, visible: false }); 
    setPie(handlePie(true));
  };

  const updateItemName = (id) => {
    const updatedItems = categories.map(item => 
      item.id === id ? { ...item, selecte: !item.selecte } : item
    );
  };

  useEffect(() => {
    setPie(handlePie(true));
  }, [categories]);

  return (
    <div className='row'>
      <div 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave} 
        style={{
          margin: "10px 50px", 
          padding: "20px", 
          boxSizing: "border-box", 
          width: "170px", 
          height: "170px", 
          borderRadius: "50%", 
          background: `conic-gradient(${pie})`, 
          position: "relative"
        }}
      >
        <div 
          style={{
            width: "130px", 
            height: "130px", 
            borderRadius: "50%", 
            background: `conic-gradient(${handlePie(false)})`, 
            position: "relative"
          }}
        ></div>
      </div>
      <div className='column'>
        <p className='textbig'>Budget Insights</p> 
        <div className='categories'>
          {categories.map((item, index) => (
            <div 
              className={selected === index ? 'category' : 'category selected'} 
              key={index} 
              onClick={() => setSelected(index)}
            >
              <div className='color' style={{ backgroundColor: `#${item.color}` }}></div>
              <p className='name'>{selected === index ? item.name : `${(item.budget / method()) * 100}%`}</p>
            </div>
          ))}
        </div>
      </div>
      {tooltip.visible && ( 
        <div className="tooltip" style={{ top: tooltip.y - 180, left: tooltip.x - 300, color: `#${tooltip.color}` }}> 
          {tooltip.category}: {tooltip.percentage.toFixed(2)}% 
        </div>
      )}
    </div>
  );
}

export default Budgetpie;

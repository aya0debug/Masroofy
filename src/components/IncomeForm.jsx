import React, { useEffect, useState } from 'react';
import email from "../assets/email.svg";
import lock from "../assets/lock.svg";
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, updateCategory } from '../state/actions/categoryActions';

function IncomeForm({ income, category, reset, id }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [budget, setBudget] = useState('');
  const [Color, setColor] = useState(0);
  const [Icon, setIcon] = useState(0);
  const categories = useSelector((state) => state.categories.categories);
  const [nameClass, setNameClass] = useState('inputgroup');
  const [budgetClass, setBudgetClass] = useState('inputgroup');
  const colors = ["4EADFF", "F6D146", "C11971", "2A2D76", "437AFA", "437AFA", "CB5EC4", "A29CD6"];
  const icons = ["category.svg", "home.svg", "lock.svg", "home.svg", "home.svg", "home.svg", "home.svg", "home.svg"];

  const handleSubmit = (event) => {
    event.preventDefault();
    const type = income ? "income" : "expense";
    const color = colors[Color];
    const icon = icons[Icon];

    if (category == null) {
      dispatch(addCategory({ color, icon, name, type, budget }));
      resetForm();
    } else {
      dispatch(updateCategory(id, { color, icon, name, type, budget }));
      reset(null);
    }
  };

  const handleCancel = () => {
    resetForm();
    reset(null);
  };

  const resetForm = () => {
    setColor(0);
    setIcon(0);
    setName('');
    setBudget('');
  };

  useEffect(() => {
    if (category != null) {
      setColor(colors.indexOf(category.color));
      setIcon(icons.indexOf(category.icon));
      setName(category.name);
      setBudget(category.budget);
    } else {
      resetForm();
    }
  }, [category]);

  const handleClick = () => {
    if (nameClass === "inputgroup" && budgetClass === "inputgroup selected") {
      setNameClass("inputgroup selected");
      setBudgetClass("inputgroup");
    } else {
      setNameClass("inputgroup");
      setBudgetClass("inputgroup selected");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      {income && <div className='wave1'></div>}
      {!income && <div className='wave2'></div>}
      <div className={nameClass} style={{ marginLeft: `${income ? 0 : 100}px` }}>
        <img className='icon' src={email} alt="icon" />
        <input type="text" id="username" value={name} onClick={handleClick} placeholder='Name' onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className={budgetClass} style={{ marginLeft: `${income ? 0 : 100}px` }}>
        <img className='icon' src={lock} alt="icon" />
        <input type="number" id="budget" placeholder={income ? "Goal" : "Budget"} value={budget} onClick={handleClick} onChange={(e) => setBudget(e.target.value)} required />
      </div>
      <p className='subtitle color'>Colors</p>
      <div className='colors'>
        {colors.map((color, index) => (
          <div className={Color === index ? "color selected" : 'color'} key={index} style={{ backgroundColor: `#${color}` }} onClick={() => setColor(index)}></div>
        ))}
      </div>
      <p className='subtitle icon' style={{ left: `${income ? 80 : -15}px` }}>Icons</p>
      <div className='icons' style={{ left: `${income ? 120 : 10}px` }}>
        {icons.map((icon, index) => (
          <img className={Icon === index ? "caty selected" : 'caty'} key={index} src={icon} alt="icon" onClick={() => setIcon(index)} />
        ))}
      </div>
      <div className="add" style={{ left: `${income ? 15 : 400}px` }}>
        <button type="submit">{category == null ? "+ Add" : "x Edit"}</button>
      </div>
      <div className="cancel" style={{ right: `${income ? 15 : 400}px` }}>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default IncomeForm;

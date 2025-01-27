import React, { useEffect, useState } from 'react';
import "./Categories.css";
import Category from '../components/Category';
import IncomeForm from '../components/IncomeForm';
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {
  const [selected, setSelected] = useState(0);
  const [category, setCategory] = useState(null);
  const data = useSelector((state) => state.categories.categories); 
  const [categories, setCategories] = useState([]);
  const [id,setId]=useState(-1);
  const [key, setKey] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
    setCategories(data.filter(caty => caty.type === (index === 0 ? 'expense' : 'income')));
    setKey(prevKey => prevKey + 1); 
  };

  useEffect(() => {
    setCategories(data.filter(caty => caty.type === 'expense'));
  }, [data]);

  return (
    <div className='categories'>
      <div className='list'>
        <div className='bar'>
          <p className='title'>Categories List</p>
          <button className={selected === 0 ? 'expense selected' : 'expense'} onClick={() => handleClick(0)}>Expense</button>
          <button className={selected === 1 ? 'income selected' : 'income'} onClick={() => handleClick(1)}>Income</button>
        </div>
        {categories.map((caty, index) => (
          <Category key={`${key}-${index}`} category={caty} edit={setCategory} editing={category} id={caty.id} setId={setId}/>
        ))}
      </div>
      <div className='column'>
        <p className='title'>{category == null ? "Add" : category.type === "income" ? "Edit" : "Add"} Income Category</p>
        <IncomeForm income={true} category={category == null ? null : category.type === "expense" ? null : category} reset={setCategory} id={id} />
        <p className='title'>{category == null ? "Add" : category.type === "expense" ? "Edit" : "Add"} Expense Category</p>
        <IncomeForm income={false} category={category == null ? null : category.type === "income" ? null : category} reset={setCategory} id={id} />
      </div>
    </div>
  );
};

export default Categories;

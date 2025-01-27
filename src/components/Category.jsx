import React from 'react';
import CircularProgress from './CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory } from '../state/actions/categoryActions';
import { calculateSpending, darkenColor } from '../state/reducers/categoryReducer';  

function Category({ category, edit, id, setId }) {
  const data = useSelector((state) => state.transactions.transactions); 
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCategory(id));
    edit(null); // Clear editing state
  };

  return (
    <div className={"category"} style={{ background: `linear-gradient(45deg, #${category.color}, #${darkenColor(category.color, 20)})` }}>
      <div className='waveb1'></div>
      <div className='waveb2'></div>
      <div className='waveb3'></div>
      <div className='wavea1'></div>
      <div className='wavea2'></div>
      <div className='wavea3'></div>
      <CircularProgress progress={calculateSpending(data, category.id) / category.budget * 100} size={100} thickness={40} top="15px" left="250px" opacity={1} uniqueKey={category.id} />
      <img className='icon' src={category.icon} alt="category icon" />
      <p className='title'>{category.name}</p>
      <p className='subtitle1'>Spending Limit:</p>
      <p className='value1'>{category.budget}k</p>
      <p className='subtitle2'>Actual Spending</p>
      <p className='value2'>{calculateSpending(data, category.id)}k</p>
      <div className='cloud' id='cloud1'><p>Reached {parseInt(calculateSpending(data, category.id) / category.budget * 100)}%</p></div>
      <div className='cloud' id="cloud2"><p>Remaining {parseInt((category.budget - calculateSpending(data, category.id)) / category.budget * 100)}%</p></div>
      <button className='edit' style={{ color: `#${category.color}` }} onClick={() => { setId(category.id); edit(category); }}>edit</button>
      <button className='delete' style={{ color: `#${category.color}` }} onClick={handleDelete}>delete</button>
    </div>
  );
}

export default Category;

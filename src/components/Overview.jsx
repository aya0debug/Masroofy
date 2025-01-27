import React, { useEffect, useState } from 'react';
import bag from "../assets/bag.svg";
import CircularProgress from './CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { setOverviews } from '../state/actions/overviewActions';

function Overview() {
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.transactions);
  const categories = useSelector((state) => state.categories.categories);
  const overviews = useSelector((state) => state.overviews.overviews);

  useEffect(() => {
    dispatch(setOverviews({ transactions, categories }));
  }, [transactions, categories, dispatch]);

  function getMonthName(monthNumber) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    if (monthNumber < 1 || monthNumber > 12) {
      return "Invalid month number";
    }
    return months[monthNumber - 1];
  }

  return (
    <div className='overviews'>
      {overviews.map((view, index) => (
        <div
          className={selected === index ? "view selected" : "view"}
          key={index}
          onMouseEnter={() => setSelected(index)}
          onMouseLeave={() => setSelected(0)}
          style={{ background: `linear-gradient(45deg, #${view.base}, #${view.color})` }}
        >
          <CircularProgress
            progress={selected === index ? (view.value / view.totale * 100) : 0}
            size={100}
            thickness={40} // Ensure correct attribute name
            top="15px"
            left="150px"
            opacity={selected === index ? 1 : 0}
          />
          <img className='icon' src={view.icon} alt="overview icon"/>
          <p className='title'>{view.title}</p>
          <p className='value'>{view.value}k</p>
          <div className='cloud' id='cloud1'>
            <p>Reached {parseInt((view.value / view.totale) * 100)}%</p>
          </div>
          <div className='cloud' id="cloud2">
            <p>Remaining {parseInt(((view.totale - view.value) / view.totale) * 100)}%</p>
          </div>
          <div className='date'>
            <p>Date: {view.date.year} {getMonthName(view.date.month)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Overview;

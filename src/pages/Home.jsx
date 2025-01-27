import React, { useEffect, useRef, useState } from 'react'
import AppBar from '../components/AppBar'
import notification from "../assets/notifications.svg"
import "./Home.css"
import Dashboard from './Dashboard'
import Categories from './Categories'
import Transactions from './Transactions'
import AddTransaction from './AddTransaction'
import Report from './Report'
import { Route, Routes } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
          <div className='pink'>
            <div></div>
          </div>
          <div className='blue'>
            <div></div>
          </div>
          <p className='textlogo'>Masroofy</p>
          <img className='notification' src={notification}></img>
          <Routes>
            <Route path='/report' element={<Report/>}></Route>
            <Route path='/transactions' element={<Transactions/>}></Route>
            <Route path='/Categories' element={<Categories/>}></Route>
            <Route path='/' element={<Dashboard/>}></Route>
          </Routes>
        <AppBar/>
    </div>
  )
}
export default Home
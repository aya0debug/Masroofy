import React, { useEffect, useRef, useState } from 'react'
import AppBar from '../components/AppBar'
import notification from "../assets/notifications.svg"
import "./Home.css"
import Dashboard from './Dashboard'

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
          <Dashboard/>
        <AppBar/>
    </div>
  )
}
export default Home
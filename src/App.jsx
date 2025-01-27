import { useState } from 'react'
import Login from './pages/login'
import "./App.css"
import Home from './pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import store from './state/store'
import { Provider } from 'react-redux'

function App() {
  
  return (
    <Provider store={store}>
    <Router>
      <Routes>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/*' element={<Home/>}></Route>
      </Routes>
    </Router>
    </Provider>
  )
}

export default App

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import WelcomePage from '../pages/WelcomePage/WelcomePage'
import HomePage from '../pages/HomePage/HomePage'


function App() {


  return (
<Routes>
  <Route path="/" element={<WelcomePage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/home" element={<HomePage/>} />
</Routes>
  )
}

export default App

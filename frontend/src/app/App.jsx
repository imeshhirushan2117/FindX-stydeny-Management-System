import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'


function App() {


  return (
<Routes>
  <Route path="/" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />
</Routes>
  )
}

export default App

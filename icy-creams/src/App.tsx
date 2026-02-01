//import React from 'react'
import './App.css'
import { Home } from './pages/Home'
import { ViewMenu } from './pages/ViewMenu'
import { Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>

     
      <Route path="/viewMenu" element={<ViewMenu/>} />
      
     </Routes>
      
    </>
  )
}

export default App

import React, { useState } from 'react'
import Navbar from './Conntact_Form/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Conntact_Form/Navbar/Home'
import AddContact from './Conntact_Form/AddContact'
import DisplayContact from './Conntact_Form/DisplayContact'
import Regsiterpage from './Conntact_Form/Regsiterpage'
import LoginPage from './Conntact_Form/LoginPage'
import Dashborad from './Conntact_Form/Dashborad'
import { ThemeContext } from './Conntact_Form/ThemeContext'

const App = () => {
  const[record,setRecord]=useState([]);





  return (
    <div>
    
      <Navbar />
      <ThemeContext.Provider value={{record,setRecord}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddContact' element={<AddContact/>}/>
        <Route path='/DisplayContact' element={<DisplayContact/>}/>
        <Route path='/Registerpage' element={<Regsiterpage/>}/>
        <Route path='/LoginPage' element={<LoginPage/>}/>
        <Route path='/Dashboard' element={<Dashborad/>}/>
      </Routes>
      </ThemeContext.Provider>
    </div>
  )
}

export default App

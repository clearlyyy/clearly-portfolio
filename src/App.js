import React from 'react'
import Navbar from './Comps/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/home-page/Home'
import About from './Pages/about-page/about'

function App() { 
  
  
  return (
    


    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/work' element={<About/>} />
      </Routes>
    </Router>
  )
}

export default App;

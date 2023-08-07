import React from 'react'

import Navbar from './Comps/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/home-page/Home'
import About from './Pages/about-page/about'
import AboutPage from './Pages/about2-page/aboutpage'
function App() { 
  
  
  return (
    


    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/work' element={<About/>} />
	<Route path='/contact' element={<AboutPage/>}/>
	<Route path='/about' element={<AboutPage/>}/>	
      </Routes>
    </Router>
  )
}

export default App;

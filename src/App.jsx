// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About'

import Home from './components/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
<>
    <NavBar />

    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
  
      </Routes>
     </Router>
     <Footer/>
    {/* {/* <Demo /> */ }
    </>
  );
}

export default App;



import React, { useState } from 'react'

import NavBar from "./Components/NavBar"
import { BrowserRouter as Router } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Layout from './pages/Layout';
import RouteSample from './pages/RouteSample';





function App() {
  const [mode, setMode] = useState("light")
  const [icons, setIcons] = useState(<DarkModeIcon fontSize="large" />)

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      setIcons(<LightModeIcon fontSize="large" />)

      document.body.style.backgroundColor = '#212631'
      document.body.style.color = 'white'
    }
    else {
      setMode("light")
      setIcons(<DarkModeIcon fontSize="large" />)

      document.body.style.backgroundColor = '#f1eeff  '
      document.body.style.color = "black"
    }
  }

  // const 
  return (
    <Router>
    <div>
      <NavBar mode={mode} toggleMode={toggleMode} icons={icons} />
      <Layout mode={mode}/>
      <RouteSample/>


    </div>
    </Router>
  )
}

export default App

// to run json server

// json-server --watch db.json --port 3001
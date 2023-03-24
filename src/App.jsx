import './App.css'
import React from 'react'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  )
}
export default App

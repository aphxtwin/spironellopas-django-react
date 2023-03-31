import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Quote from './pages/QuoteWizard/Quote'

function App() {
  return (

        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path='/cotizacion' element={<Quote/>} />
          </Routes>
        </div>

  )
}
export default App

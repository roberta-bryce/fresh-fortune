import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Edit from './Edit'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App

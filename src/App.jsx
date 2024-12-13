import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Parent from './Parent'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Parent />} />
        <Route path='/c' element={<Child/>} />
      </Routes>
    </>
  )
}

export default App

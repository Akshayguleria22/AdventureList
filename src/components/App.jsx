import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Body />
    </>
  )
}

export default App

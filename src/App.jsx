import { useState } from 'react'
import './App.css'
import { Checkbox } from './components'

function App() {
  const [agreed, setAgreed] = useState(false)
  return (
    <>
      <Checkbox checked={agreed} onChange={setAgreed} label="I agree to the terms" />
    </>
  )
}

export default App

import './App.css'
import { Select } from './components'
import { useState } from 'react'


function App() {

  const [selected, setSelected] = useState('')

  

  return (
    <>
      <Select
          options={[
              { value: 'be', label: 'Belgium' },
              { value: 'fr', label: 'France' },
          ]}
          value={selected}
          onChange={setSelected}
          placeholder="-- Choose a country --"
      />
      
    </>
  )
}

export default App
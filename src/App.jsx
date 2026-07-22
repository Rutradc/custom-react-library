import './App.css'
import { Table } from './components'

function App() {

  const personnes = [
    { name: 'Arthur', age: 24, city: "Sombreffe"},
    { name: "Alice", age: 25, city: "Paris" },
    { name: "Bob", age: 30, city: "Londres" }
  ]
  return (
    <>
      <Table items={personnes}></Table>
    </>
  )
}

export default App

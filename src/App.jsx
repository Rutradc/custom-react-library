import './App.css'
import { SideBar } from './components'
import { navLinks } from './config/navLinks.js'


function App() {

  return (
    <>
      <SideBar links={navLinks} />
    </>
  )
}

export default App

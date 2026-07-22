import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SideBar } from './components'
import { navLinks } from './config/navLinks.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideBar links={navLinks} />
    <App />
  </StrictMode>,
)

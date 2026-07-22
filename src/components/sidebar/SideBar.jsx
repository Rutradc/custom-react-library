import { useState } from 'react'
import './SideBar.css'

function SideBar({ links = [] }) {

    const [open, setOpen] = useState(false)

    return (
        <>
            <button onClick={() => setOpen(true)}>&#9776;</button>
            <div className={`SideBar SideBar-${open ? 'open' : 'closed'}`}>
                <button onClick={() => setOpen(false)}>&times; Close</button>
                {links.map((link) => (
                    <a key={link.href} href={link.href} className="SideBar-link">
                        {link.label}
                    </a>
                ))}
            </div>
        </>
    )
}

export default SideBar


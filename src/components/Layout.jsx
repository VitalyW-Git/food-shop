import React from 'react'
import Navbar from './Navbar.jsx'

export default function Layout ({children}) {
    return (
        <React.Fragment>
            <Navbar/>
            {children}
        </React.Fragment>
    )
}

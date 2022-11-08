import React from 'react'
import { Navbar } from './Navbar.jsx'

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className=''>
                <Navbar />
                {children}
            </div>
        </React.Fragment>
    )
}

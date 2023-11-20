import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, offMenu }) => {
    return (
        <>
            <Header offMenu={offMenu}></Header>
            <div style={{ minHeight: "100vh" }}>
                {children}
            </div>

            <Footer offMenu={offMenu}></Footer>
        </>
    )
}

export default Layout
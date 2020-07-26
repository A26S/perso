import React, { useRef, useLayoutEffect } from 'react'
import useWidth from '../hooks/useWindow'

const Nav = () => {
    const nav = useRef()
    const width = useWidth()

    useLayoutEffect(() => {
        nav.current.childNodes.forEach(p => {
            width < 700 ? p.classList.add('nav-mobile') : p.classList.remove('nav-mobile')
        })
    }, [nav, width])
    
    return (
        <>
            <nav ref={nav}>
                <p>Ali Saidik</p>
                <p>About</p>
                <p>Work</p>
                <p>Contact</p>
            </nav>
        </>
    )
}

export default Nav
import React, { memo, useRef, useEffect } from 'react'
import useIntersection from '../hooks/useIntersection'
// import useParallax from '../hooks/useParallax'

const Footer = () => {
    const footer = useRef()
    const contact = useRef()
    const visible = useIntersection(footer)
    // useParallax({
    //     el: contact, 
    //     overflow: 100
    // })

    const redirect = e => {
        const classList = e.target.classList.value
        if (classList.includes('github')) {
            window.open('https://github.com/A26S', '_blank')
        } else if (classList.includes('linkedin')) {
            window.open('https://uk.linkedin.com/in/ali-saidik', '_blank')
        } else if (classList.includes('medium')) {
            window.open('https://medium.com/@saida130.210', '_blank')
        }
    }
    
    useEffect(() => {
        visible ? document.body.classList.add('invert') : document.body.classList.remove('invert')
    }, [visible])

    return (
        <div id="footer" className="footer" ref={footer}>
            <div className="msg">Get in touch.</div>
            <div className="contact" ref={contact}>
                <div className="github icon" onClick={redirect}/>
                <div className="linkedin icon" onClick={redirect}/>
                <div className="medium icon" onClick={redirect}/>
            </div>
        </div>
    )
}

export default memo(Footer)
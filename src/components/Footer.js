import React from 'react'

const Footer = () => {
    const redirect = e => {
        const classList = e.target.classList.value
        if (classList.includes('github')) {
            window.open('https://github.com/A26S', '_blank')
        } else if (classList.includes('linkedin')) {
            window.open('https://uk.linkedin.com/in/ali-saidik-247aba195', '_blank')
        } else if (classList.includes('medium')) {
            window.open('https://medium.com/@saida130.210', '_blank')
        }
    }
    
    return (
        <div className="footer">
            <div className="github icon" onClick={redirect}/>
            <div className="linkedin icon" onClick={redirect}/>
            <div className="medium icon" onClick={redirect}/>
        </div>
    )
}

export default Footer
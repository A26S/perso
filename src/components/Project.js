import React, { useLayoutEffect, useRef } from 'react'

const Project = ({title, description, img, alt, url}) => {
    const imgRef = useRef()
    const wrap = useRef()
    
    
    const handleClick = () => {
        window.open(url, '_blank')
    }

    const handleMouseMove = e => {
        e.target.style.setProperty('--x', e.clientX - (e.target.getBoundingClientRect().left + Math.floor(e.target.getBoundingClientRect().width / 2)))
        e.target.style.setProperty('--y', e.clientY - (e.target.getBoundingClientRect().top + Math.floor(e.target.getBoundingClientRect().height / 2)))
    }

    const handleMouseLeave = e => {
        e.target.style.setProperty('--x', 0)
        e.target.style.setProperty('--y', 0) 
    }

    useLayoutEffect(() => {
        const render = () => {
            requestAnimationFrame(render)
            imgRef.current.addEventListener('mousemove', handleMouseMove)
        }
        render()
        return () => imgRef.current.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useLayoutEffect(() => {
        const render = () => {
            requestAnimationFrame(render)
            imgRef.current.addEventListener('mouseleave', handleMouseLeave)
        }
        render()
        return () => imgRef.current.removeEventListener('mouseleave', handleMouseLeave)
    }, [])

    return (
        <div className="project">
            <h3>{title}</h3>
            <div className="img-wrap" ref={imgRef} onClick={handleClick} >
                <img className="img" ref={wrap} src={img} alt={alt}/>
            </div>
            <div className="description">{description}</div>
        </div>
    )
}

export default Project
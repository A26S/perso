import React, { useLayoutEffect, useRef } from 'react'
import useParallax from '../hooks/useParallax'

const Project = ({title, description, img, alt, url}) => {
    const project = useRef()
    const imgRef = useRef()
    const wrap = useRef()
    useParallax([
        {
            el: project,
            overflow: 150
        }, 
        {
            el: imgRef,
            overflow: 10
        }
    ])
    
    const handleClick = () => {
        window.open(url, '_blank')
    }

    return (
        <div className="project" ref={project}>
            <h3>{title}</h3>
            <div className="img-wrap" ref={imgRef} onClick={handleClick} >
                <img className="img" ref={wrap} src={img} alt={alt}/>
            </div>
            <div className="description">{description}</div>
        </div>
    )
}

export default Project
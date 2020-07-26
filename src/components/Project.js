import React, { useLayoutEffect, useRef } from 'react'
import useClass from '../hooks/useClass'
import useWindow from '../hooks/useWindow'

const Project = ({title, description, img, alt, url}) => {
    const project = useRef()
    const imgRef = useRef()
    const wrap = useRef()
    const { height } = useWindow()
    useClass([project])
    // console.log(project)
    
    const handleClick = () => {
        window.open(url, '_blank')
    }

    // useLayoutEffect(() => {
    //     lol()
    // }, [height])

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
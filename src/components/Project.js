import React, { useRef, memo } from 'react'
import useParallax from '../hooks/useParallax'

const Project = ({title, description, img, alt, url}) => {
    const h3 = useRef()
    const imgRef = useRef()
    const button = useRef()
    useParallax([
        // {
        //     el: imgRef,
        //     overflow: 50
        // }, 
        {
            el: h3,
            overflow: 35
        }
    ])
    
    const handleClick = () => {
        window.open(url, '_blank')
    }

    return (
        <div className="project" >
            <h3 ref={h3}>{title}</h3>
            <div className="img-wrap" ref={imgRef} onClick={handleClick} >
                <img className="img" src={img} alt={alt}/>
                <div className="button" ref={button}>View</div>
            </div>
            <div className="description">{description}</div>
        </div>
    )
}

export default memo(Project)
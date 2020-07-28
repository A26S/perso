import React, { useRef, memo } from 'react'
import useParallax from '../hooks/useParallax'

const Project = ({title, description, img, alt, url}) => {
    const h3 = useRef()
    const desc = useRef()
    useParallax({
        el: h3,
        overflow: 50
    })
    // useParallax({
    //     el: desc,
    //     overflow: 30
    // })

    const handleClick = () => {
        window.open(url, '_blank')
    }

    return (
        <div className="project" >
            <h3 ref={h3}>{title}</h3>
            <div className="img-wrap" onClick={handleClick} >
                <img className="img" src={img} alt={alt}/>
                <div className="button" >View</div>
            </div>
            <div className="description" ref={desc}>{description}</div>
        </div>
    )
}

export default memo(Project)
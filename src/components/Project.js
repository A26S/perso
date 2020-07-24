import React, {  } from 'react'

const Project = ({title, description, img, alt, url}) => {
    
    const handleClick = () => {
        window.open(url, '_blank')
    }
    return (
        <div className="project">
            <h3>{title}</h3>
            <div className="img" onClick={handleClick} />
            <div className="description">{description}</div>
        </div>
    )
}

export default Project
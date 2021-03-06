import React, { useState, memo } from 'react'
import Project from './Project'

const Work = () => {
    const projects = useState([
        {
            title: 'Exoplanets',
            description: 'Interacting with the NASA API to visualise exoplanet data.',
            img: '/exoplanets.png',
            alt: 'Exoplanets Project',
            url: 'https://nifty-mccarthy-59fba0.netlify.app'
        },
        {
            title: 'Type-Test',
            description: 'Test your type efficiency with an exciting speed-test!',
            img: '/type-test.jpeg',
            alt: 'Type-Test Project',
            url: 'https://github.com/A26S/type-test-improved'
        },
        {
            title: 'DevCoin',
            description: 'Pure JavaScript implementation of a cryptocurrency, built on blockchain technology.',
            img: '/F1.large.jpg',
            alt: 'DevCoin Project',
            url: 'https://github.com/A26S/DevCoin'
        }
    ])
    
    return (
        <div id="work" className="work">
            {projects[0].map(({title, description, img, alt, url}, index) => <Project 
            key={index}
            title={title} 
            description={description}
            img={img}
            alt={alt}
            url={url}/>)}
        </div>
    )
}

export default memo(Work)
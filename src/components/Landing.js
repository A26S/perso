import React from 'react'
import useWidth from '../hooks/useWidth'

const Landing = () => {
    const width = useWidth()

    return (
        <div className="landing">
            <h1>Ali Saidik</h1>
            <h2>Software engineer.{width < 700 ? <br/> : ' '}London-based.</h2>
        </div>
    )
}

export default Landing
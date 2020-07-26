import React from 'react'
import useWidth from '../hooks/useWindow'

const Landing = ({ landing }) => {
    const width = useWidth()

    return (
        <div className="landing">
            <h1 ref={landing}>Ali Saidik</h1>
            <h2>Software engineer.{width < 700 ? <br/> : ' '}London-based.</h2>
        </div>
    )
}

export default Landing
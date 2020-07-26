import React, { useRef, useLayoutEffect, memo, useEffect } from 'react'
import useParallax from '../hooks/useParallax'
import useWindow from '../hooks/useWindow'
import useIntersection from '../hooks/useIntersection'
import useSmoothScroll from '../hooks/useSmoothScroll'

const Landing = () => {
    const { width } = useWindow()
    const name = useRef()
    const bio = useRef()
    const [visible, setRef] = useIntersection()

    // const smoothscroll = useParallax([name, bio], 0.075)
    // const smoothscroll = useSmoothScroll([name], 0.1)

    useEffect(() => {
        // smoothscroll()
    }, [])

    useLayoutEffect(() => console.log(visible), [visible])
    
    // useLayoutEffect(() => {
    //     width < 700 ? name.current.classList.add('double') : name.current.classList.remove('double')
    // }, [width])
    return (
        <div className="landing">
            <h1 ref={name}>Ali Saidik</h1>
            <h2 ref={bio}>Software engineer.{width < 700 ? <br/> : ' '}London-based.</h2>
        </div>
    )
}

export default memo(Landing)
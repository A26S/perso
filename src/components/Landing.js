import React, { useRef, useLayoutEffect, memo } from 'react'
import useSmoothScroll from '../hooks/useSmoothScroll'
import useWindow from '../hooks/useWindow'
import useIntersection from '../hooks/useIntersection'

const Landing = () => {
    const { width } = useWindow()
    const name = useRef()
    const [visible, setRef] = useIntersection()

    const smoothscroll = useSmoothScroll(name, -0.15)

    useLayoutEffect(() => {
        smoothscroll()
    }, [])

    useLayoutEffect(() => console.log(visible), [visible])
    
    // useLayoutEffect(() => {
    //     width < 700 ? name.current.classList.add('double') : name.current.classList.remove('double')
    // }, [width])
    return (
        <div className="landing">
            <h1 ref={name}>Ali Saidik</h1>
            <h2 ref={setRef}>Software engineer.{width < 700 ? <br/> : ' '}London-based.</h2>
        </div>
    )
}

export default memo(Landing)
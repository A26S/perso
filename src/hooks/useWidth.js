import { useState, useLayoutEffect } from 'react'

const useWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)

    const handleResize = () => setWidth(window.innerWidth)
    
    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [width])

    return width
}

export default useWidth
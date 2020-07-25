import { useState, useLayoutEffect } from 'react'

const useHeight = () => {
    const [height, setHeight] = useState(window.innerHeight)

    const handleResize = () => setHeight(window.innerHeight)
    
    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [height])

    return height
}

export default useHeight
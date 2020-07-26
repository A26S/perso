import { useState, useEffect } from "react"

const useIntersection = (ref) => {
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            console.log(entries)
            entries.forEach(entry => setVisible(entry.intersectionRatio > 0))
            console.log({ref})
        })
        
        if (ref.current) {
            observer.observe(ref.current)
        }
        
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref])

    return visible
}

export default useIntersection
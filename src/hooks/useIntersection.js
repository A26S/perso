import { useState, useEffect } from "react"

const useIntersection = () => {
    const [ref, setRef] = useState(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => setVisible(entry.isIntersecting))
        })
        
        if (ref) {
            observer.observe(ref)
        }
        
        return () => {
            if (ref) {
                observer.unobserve(ref)
            }
        }
    }, [ref])

    return [visible, setRef]
}

export default useIntersection
import { useLayoutEffect, useState, useCallback, useRef } from 'react'
import lerp from 'lerp'
import useWindow from './useWindow'

const useParallax = ({ el, overflow }) => {
    const { height } = useWindow()
    const [visible, setVisible] = useState(false)
    const map = useRef((x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c)
    const props = useRef({
        height: 0,
        top: 0
    })
    const translateY = useRef({
        previous: 0, 
        current: 0, 
        ease: 0.1,
        setValue: (overflow) => {
            const toValue = -1 * overflow;
            const val = map.current(props.current.top - window.scrollY, height, -1 * props.current.height, overflow, toValue);
            return overflow < 0 ? Math.min(Math.max(val, overflow), toValue) : Math.max(Math.min(val, overflow), toValue);
        }
    })
    const request = useRef()

    const parallax = useCallback((el, overflow) => {
        const getSize = () => {
            const rect = el.current.getBoundingClientRect()
            props.current.height = rect.height
            props.current.top =  window.scrollY + rect.top
        } 
        
        const update = () => {
            translateY.current.previous = translateY.current.current = translateY.current.setValue(overflow)
            layout()
        }
        
        const layout = () => {
            const { previous } = translateY.current
            el.current.style.transform = `translate3d(0, ${previous}px, 0)`;
        }
        
        const render = () => {
            let { previous, current, ease } = translateY.current
            translateY.current.previous = lerp(previous, current, ease)
            layout()
        }
        
        const isVisible = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => setVisible(entry.intersectionRatio > 0))
            })
            observer.observe(el.current)
        }
        
        isVisible()
        getSize()
        update()

        if (visible) {
            render() 
        }
        
        request.current = requestAnimationFrame(() => parallax(el, overflow))
    }, [translateY, visible])
    
    
    useLayoutEffect(() => {
        const run = () => {
            if (el.current) {
                parallax(el, overflow)
            }
        }
        run()
        return () => cancelAnimationFrame(request.current)
    }, [el, overflow, parallax])
}

export default useParallax
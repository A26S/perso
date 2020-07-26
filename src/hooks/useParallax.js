import { useLayoutEffect, useState } from 'react'
import lerp from 'lerp'
import useWindow from './useWindow'

const useParallax = (elements) => {
    const { height } = useWindow()
    const [visible, setVisible] = useState(false)
    
    const MathUtils = {
        map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c,
    };

    const translateY = {
        previous: 0, 
        current: 0, 
        ease: 0.1,
        setValue: (overflow) => {
            const toValue = -1 * overflow;
            const val = MathUtils.map(props.top - window.scrollY, height, -1 * props.height, overflow, toValue);
            return overflow < 0 ? Math.min(Math.max(val, overflow), toValue) : Math.max(Math.min(val, overflow), toValue);
        }
    }
    
    const props = {
        height: 0,
        top: 0
    }

    const parallax = (el, overflow) => {
        const getSize = () => {
            const rect = el.current.getBoundingClientRect()
            props.height = rect.height
            props.top =  window.scrollY + rect.top
        } 
        
        const update = () => {
            translateY.previous = translateY.current = translateY.setValue(overflow)
            layout()
        }
        
        const layout = () => {
            const { previous } = translateY
            el.current.style.transform = `translate3d(0, ${previous}px, 0)`;
        }
        
        const render = () => {
            let { previous, current, ease } = translateY
            previous = lerp(previous, current, ease)
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
        requestAnimationFrame(() => parallax(el, overflow))
    }

    useLayoutEffect(() => {
        elements.forEach(({ el, overflow }) => {
            if (el.current) {
                requestAnimationFrame(() => parallax(el, overflow))
            }
        })
    }, [])
}

export default useParallax
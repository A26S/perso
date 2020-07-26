import useWindow from "./useWindow";
import { useEffect, useLayoutEffect } from "react";

const useClass = (elements) => {
    const { height } = useWindow()
    
    const MathUtils = {
        // map number x from range [a, b] to [c, d]
        map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c,
        // linear interpolation
        lerp: (a, b, n) => (1 - n) * a + n * b,
        // Random float
        getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
    };

    const translateY = {
        previous: 0, 
        current: 0, 
        ease: 0.1,
        fromValue: parseFloat(MathUtils.getRandomFloat(30,400)),
        setValue: () => {
            const fromValue = translateY.fromValue;
            const toValue = -1 * fromValue;
            const val = MathUtils.map(props.top - window.scrollY, height, -1 * props.height, fromValue, toValue);
            return fromValue < 0 ? Math.min(Math.max(val, fromValue), toValue) : Math.max(Math.min(val, fromValue), toValue);
        }
    }
    
    const props = {
        height: 0,
        top: 0
    }

    const lol = (el) => {
        const getsize = () => {
            const rect = el.current.getBoundingClientRect()
            props.height = rect.height
            props.top =  window.scrollY + rect.top
        } 
        
        const update = () => {
            translateY.previous = translateY.current = translateY.setValue()
            layout()
        }
        
        const layout = () => {
            el.current.style.transform = `translate3d(${translateY.previous}px,0,0)`;
        }
        
        const render = () => {
            translateY.previous = MathUtils.lerp(translateY.previous, translateY.current, translateY.ease)
            layout()
        }
        
        getsize()
        update()
        render()
        
        requestAnimationFrame(() => lol(el))
    }

    useLayoutEffect(() => {
        elements.forEach(el => {
            if (el.current) {    
                console.log(translateY)
                requestAnimationFrame(() => lol(el))
            }
        })
    }, [window.scrollY])
}

export default useClass
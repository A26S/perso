import lerp from 'lerp';

const useParallax = (elements, factor) => {
    // const data = {
    //     current: 0,
    //     previous: 0,  
    // }
    
    // const scroll = () => {
    //     elements.forEach(el => {
    //         data.current = el.current.getBoundingClientRect().top / factor
    //         data.previous = lerp(data.previous, data.current, 0.1);
            
    //         console.log(el.current.getBoundingClientRect())
    //         el.current.style.transform = `translate3d(0, ${data.previous - el.current.getBoundingClientRect().height}px, 0)`;
            
    //         requestAnimationFrame(scroll)
    //     })
    // }

    // return () => requestAnimationFrame(scroll)
}

export default useParallax
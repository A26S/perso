import lerp from 'lerp';

const useSmoothScroll = el => {
    const data = {
        current: 0,
        previous: 0,  
    }
    
    const scroll = () => {
        data.current = window.scrollY
        data.previous = lerp(data.previous, data.current, 0.075);

        el.current.style.transform = `translate3d(0, -${data.previous}px, 0)`;

        requestAnimationFrame(scroll)
    }

    return () => requestAnimationFrame(scroll)
}

export default useSmoothScroll
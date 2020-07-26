import useWindow from "./useWindow"

const useScroll = (el) => {
    const { height } = useWindow()
    const setBodySize = () => document.body.style.height = `${el.current.getBoundingClientRect().height}px`
    return [setBodySize, height]
}

export default useScroll
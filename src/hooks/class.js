const MathUtils = {
    // map number x from range [a, b] to [c, d]
    map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c,
    // linear interpolation
    lerp: (a, b, n) => (1 - n) * a + n * b,
    // Random float
    getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
};

let winsize;
const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
calcWinsize();
// and recalculate on resize
window.addEventListener('resize', calcWinsize);

let docScroll;
// for scroll speed calculation
let lastScroll;
let scrollingSpeed = 0;
// scroll position update function
const getPageYScroll = () => docScroll = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener('scroll', getPageYScroll);


class Item {
    constructor(el) {
        this.DOM = {el: el};
        this.DOM.imageWrapper = this.DOM.image.parentNode;
        this.DOM.title = this.DOM.el.querySelector('.content__item-title');
        this.renderedStyles = {
            titleTranslationY: {
                previous: 0, 
                current: 0, 
                ease: 0.1,
                fromValue: Number(MathUtils.getRandomFloat(30,400)),
                setValue: () => {
                    const fromValue = this.renderedStyles.titleTranslationY.fromValue;
                    const toValue = -1*fromValue;
                    const val = MathUtils.map(this.props.top - docScroll, winsize.height, -1 * this.props.height, fromValue, toValue);
                    return fromValue < 0 ? Math.min(Math.max(val, fromValue), toValue) : Math.max(Math.min(val, fromValue), toValue);
                }
            }
        };
        this.getSize();
        // set the initial values
        this.update();
        // use the IntersectionObserver API to check when the element is inside the viewport
        // only then the element styles will be updated
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => this.isVisible = entry.intersectionRatio > 0);
        });
        this.observer.observe(this.DOM.el);
        // init/bind events
        this.initEvents();
    }
    update() {
        // sets the initial value (no interpolation)
        for (const key in this.renderedStyles ) {
            this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
        }
        // apply changes/styles
        this.layout();
    }
    getSize() {
        const rect = this.DOM.el.getBoundingClientRect();
        this.props = {
            // item's height
            height: rect.height,
            // offset top relative to the document
            top: docScroll + rect.top
        }
    }
    initEvents() {
        window.addEventListener('resize', () => this.resize());
    }
    resize() {
        // gets the item's height and top (relative to the document)
        this.getSize();
        // on resize reset sizes and update styles
        this.update();
    }
    render() {
        // update the current and interpolated values
        for (const key in this.renderedStyles ) {
            this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
        }
        
        // and apply changes
        this.layout();
    }
    layout() {
        // scale the image
        // translate the title
        this.DOM.title.style.transform = `translate3d(0,${this.renderedStyles.titleTranslationY.previous}px,0)`;
    }   
}
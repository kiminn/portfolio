import Lenis from '@studio-freight/lenis';

const lenis = () => {
    const lenis = new Lenis({
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', (e: Event) => {
        console.log(e);
    });
};
export default lenis;

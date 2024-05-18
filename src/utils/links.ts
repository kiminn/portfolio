const link = () => {
    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
};

export default link;

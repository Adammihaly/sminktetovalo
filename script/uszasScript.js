export function translateToZero(toTranslate, id = false) {
    let el;
    if (id === false) {
        el = document.querySelector('.' + toTranslate)
    } else {
        el = document.getElementById(toTranslate)
    }
    el.style.transform = 'translate(0)';
}

export function observe(toObserve, toTransform) {
    const elToObserve = document.querySelector('.' + toObserve);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                toTransform.forEach(elClass => {
                    const el = document.querySelector('.' + elClass);
                    el.style.transform = 'translate(0)';
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05
    });

    observer.observe(elToObserve);
}
// Javascript specific to index.html

const observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        entry[0].target.children.forEach(elem => {
            elem.style.opacity = '1';
            elem.style.translateY = "0";
        });
        observer.unobserve(entry[0].target);
    }
});
observer.observe(document.querySelector("#about-wrapper"));

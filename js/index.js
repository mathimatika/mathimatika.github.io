// Javascript specific to index.html

const observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        for (const elem of entry[0].target.children) {
            elem.style.opacity = '1';
            elem.style.transform = "translateY(0px)";
        }
        observer.unobserve(entry[0].target);
    }
});
observer.observe(document.querySelector("#about-wrapper"));

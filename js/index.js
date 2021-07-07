// Javascript specific to index.html

const observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        entry[0].target.style.opacity = "1";
        observer.unobserve(entry[0].target);
    }
});
observer.observe(document.querySelector("#about-wrapper"));

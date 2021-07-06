// Inserts a bunch of HTML stuff
const nav = `
<div id="nav-wrapper">
    <div id="nav-left">
        <a href="/"><img src="images/mathimatika.png" alt="Logo" loading="lazy" width="53"></a>
    </div>
    <div id="nav-right">
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/contest">Contest</a>
            </li>
            <li>
                <div id="resources" class="dropdown">
                    Other resources
                    <div id="tri"></div>
                    <div class="drop-content">
                        <a href="/handouts">Handouts</a>
                        <a href="/math-club">Math club</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
`;

const footer = `
<div id="footer-wrapper">
    <div id="left-footer">
        <span>Mathimatika</span>
        <span>Copyright &copy; Mathimatika 2021</span>
        <span id="contact">If you have any questions, please contact us at <a href="mailto:team.mathimatika@gmail.com">team.mathimatika@gmail.com</a>.</span>
    </div>
    <div id="right-footer">
        <span>Menu</span>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contest">Contest</a>
    </div>
</div>
`;

document.querySelector("nav").innerHTML = nav;
document.querySelector("footer").innerHTML = footer;

const observer = new IntersectionObserver((entry, observer) => {
    console.log(entry);
    if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
    }
},
{
    root: null,
    rootMargin: '0px',
    threshold: 1.0
});
observer.observe(document.querySelector("#about-wrapper"));

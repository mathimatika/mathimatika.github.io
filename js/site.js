// Inserts a bunch of HTML stuff
const nav = `
<div id="nav-wrapper">
    <div id="nav-left">
        <a href="/"><img src="/images/mathimatika.png" alt loading="lazy"></a>
    </div>
    <div id="nav-right">
        <div id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div id="mobile-nav">
            <div id="close">
                <span></span>
                <span style="visibility: hidden;"></span>
                <span></span>
            </div>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">Our Team</a>
                </li>
                <li>
                    <a href="/contests">Contests</a>
                </li>
                <li>
                    <a href="/sponsors">Sponsors</a>
                </li>
                <li>
                    <div id="resources" class="dropdown">
                        <span>Other resources</span>
                        <div id="tri"></div>
                        <div class="drop-content">
                            <a href="/handouts">Handouts</a>
                            <!--<a href="/math-club">Math club</a>-->
                        </div>
                    </div>
                </li>
            </ul>
        </div>
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
        <a href="/contests">Contests</a>
    </div>
</div>
`;

document.querySelector("nav").innerHTML = nav;
document.querySelector("footer").innerHTML = footer;
document.querySelector("nav").classList.add("closed-nav");

document.querySelector("#hamburger").onclick = open;
document.querySelector("#close").onclick = close;

const breakpoint = 1030;

window.onscroll = () => {
    if (window.scrollY <= 0) {document.querySelector('nav').classList.add("closed-nav");}
    else {document.querySelector('nav').classList.remove("closed-nav");}
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= breakpoint) {
        document.querySelector("#resources span").textContent = "Other";
    }
    else if (document.querySelector("#resources span").textContent == "Other") {
        document.querySelector("#resources span").textContent = "Other Resources";
    }
});

function open() {document.querySelector("#mobile-nav").style.right = "0";}
function close() {document.querySelector("#mobile-nav").style.right = "-75%";}

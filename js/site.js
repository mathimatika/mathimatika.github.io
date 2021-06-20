// Inserts a bunch of HTML stuff
const nav = `
<div id="nav-wrapper">
    <div id="nav-left">IMAGE</div>
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

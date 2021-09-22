const msg = [
    "Did you know that 404 can be expressed as the sum of two perfect squares?",
    "404 = 2<sup>2</sup> × 101",
    "404 is a deficient number.",
    "194<sub>16</sub> = 404"
];
function rand(n) {
    const r = Math.floor(Math.random() * n);
    return r > n - 1 ? r - 1 : r;
}

document.querySelector("#head-wrapper span").innerHTML += msg[rand(msg.length)];

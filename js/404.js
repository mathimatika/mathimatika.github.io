const msg = [
    "404 can be expressed as the sum of two perfect squares",
    "404 = 2<sup>2</sup> × 101",
    "404 is a deficient number",
    "you are probably lost"
];
function rand(n) {
    const r = Math.floor(Math.random() * n);
    return r > n - 1 ? r - 1 : r;
}

document.querySelector("#head-wrapper span").innerHTML += "Did you know that " + msg[rand(msg.length)] + "?";

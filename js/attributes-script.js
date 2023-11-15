// "use strict";
(() => {
    setTimeout(function () {
        document.getElementById("profile-pic").src = "../imgs/cute-duck.jpeg"}, 2000);

    setTimeout(function () {
        document.getElementById("profile-name").innerHTML = "Codey The Cute Ducky"},4000);

        setTimeout(function () {
            document.getElementById("profile-desc").style.color = "purple"}, 6000);

    setTimeout(function () {
        document.getElementById("profile-desc").style.fontFamily = "sans-serif"}, 6000);

    let colors = ['purple', 'pink', 'blue', 'magenta'];
    let i = 0;
    let interval = setInterval(function() {
        let element = document.querySelector("#profile-card");
        element.style.backgroundColor = colors[i % colors.length];
        i++;}, 2000);
})();

document.addEventListener("DOMContentLoaded", function () {
    const starField = document.getElementById("stars");

    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 1 + 1 + "s";
        starField.appendChild(star);
    }
});

let body = document.querySelector("body");
let btn = document.querySelector(".theme-changer");
let currentTheme = document.querySelector(".current-theme");

btn.addEventListener("click", () => {
    let val = currentTheme.innerText;
    if (val === "DARK") {
        body.style.color = "var(--dark-text-color)"
        body.style.backgroundColor = "var(--dark-bg-color)"
        currentTheme.innerText = "LIGHT"
    } else {
        body.style.color = "var(--light-text-color)"
        body.style.backgroundColor = "var(--light-bg-color)"
        currentTheme.innerText = "DARK"
    }
})

window.sr = ScrollReveal();
const navMobile = document.getElementById("navMobile");

const toogleMenu = () => {
    navMobile.classList.toggle("toogleMobile")
}

window.addEventListener("scroll", () => {
    const nav = document.getElementById("navegation");
    this.scrollY >= 50 ? nav.classList.add("nav-scroll")
        : nav.classList.remove("nav-scroll");
})

sr.reveal(".top", {
    duration: 1500,
    origin: "top",
    distance: "100px",
})
sr.reveal(".bottom", {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
})
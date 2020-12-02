//scroll event listener
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    const scroll = document.querySelector(".banner__scroll");
    const top = document.querySelector(".top-btn")
    nav.classList.toggle("sticky", window.scrollY > 100);
    if(window.scrollY > 100) {
        scroll.style.opacity = '0';
        scroll.style.visibility = 'hidden';
        top.style.opacity = '1';
        top.style.visibility = 'visible';
    } else {
        scroll.style.opacity = '1';
        scroll.style.visibility = 'visible';
        top.style.opacity = '0';
        top.style.visibility = 'hidden';
    }
});
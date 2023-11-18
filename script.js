
window.addEventListener("scroll", function () {
    let header = document.querySelector('.h');
    header.classList.toggle('rolagem', window.scrollY > 0);
})




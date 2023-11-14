window.addEventListener("scroll", function(){
    let header = this.document.querySelector('.h')
    header.classList.toggle('rolagem', this.window.scrollY > 0)
})

   

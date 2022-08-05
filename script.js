let menu = document.querySelector('.bx-menu')
let navbar = document.querySelector('.navbar')
let hiddenLinks = document.querySelector('.navbar-bottom')

menu.addEventListener('click', ()=>{
    hiddenLinks.classList.toggle('bottom-nav-shown')
    hiddenLinks.classList.toggle('light-gray')
    navbar.classList.toggle('light-gray')
})
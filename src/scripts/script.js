import '../styles/Base.scss'

window.onload = function () {
    const pageLoading = document.querySelector('.page .loading')
    setTimeout(() => {
        pageLoading.style.display = 'none'
    }, 500)
}
const burger = document.querySelector('.header-nav-burger span')
const menu = document.querySelector('.header__nav-menu')

burger.addEventListener('click', function () {
    burger.classList.toggle('active')
    menu.classList.toggle('animate')
})

const mediaQueryMobile = window.matchMedia(' (min-width: 320px),(max-width: 768px)')
const mediaQueryPc = window.matchMedia('(min-width: 769px)')
if (mediaQueryMobile.matches) {
    menu.classList.add('header__nav-menu--mobile')
}
if(mediaQueryPc.matches){
    menu.classList.remove('header__nav-menu--mobile')
}
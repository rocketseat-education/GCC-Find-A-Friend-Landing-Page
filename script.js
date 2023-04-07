const openMenuMobile = document.querySelector('#open-menu')
const closeMenuMobile = document.querySelector('#close-menu')
const menuMobile = document.querySelector('#navigation')

function handleNavigation() {
  openMenuMobile.classList.toggle('hide')
  closeMenuMobile.classList.toggle('hide')
  menuMobile.classList.toggle('opened')
}

openMenuMobile.addEventListener('click', handleNavigation)
closeMenuMobile.addEventListener('click', handleNavigation)

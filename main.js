const hamburgerButton = document.querySelector('.logoBoxHamburger')
const navigationBox = document.querySelector('.navigationBox')
const registerBox = document.querySelector('.registerBox')

hamburgerButton.addEventListener('click', hideMenu) 


function hideMenu()
{
    navigationBox.classList.toggle('hidden')
    registerBox.classList.toggle('hidden')
}
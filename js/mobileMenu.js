$(document).ready(function() {

    const menuToggle = document.getElementById('menuToggle')
    const backDrop = document.getElementById('backdrop')
    menuToggle.addEventListener('click', showMenu)
    backDrop.addEventListener('click', showMenu)

    function showMenu() {
        menuToggle.classList.toggle('nav-logo--active')
    }
})

function showSecondLevel(currentElem) {
    currentElem.classList.add('--selected')
}
function hideSecondLevel() {
    document.querySelector('.--selected').classList.remove('--selected')
}

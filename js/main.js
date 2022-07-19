//==========================| Elements |==========================//
const burger = document.getElementById('burger')

//==========================| Events |==========================//
burger.addEventListener('click', moveMenu)

//==========================| Functions |==========================//
function moveMenu() {
    const menu = document.querySelector('.nav-container nav')
    menu.classList.toggle('move')
}
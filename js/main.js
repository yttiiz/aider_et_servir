//==========================| Elements |==========================//

//==========================| Events |==========================//
burger.addEventListener('click', moveMenu)

//==========================| Functions |==========================//
function moveMenu() {
    const burger = document.querySelector('#burger button'),
    container = document.querySelector('.nav-container'),
    navigation = container.querySelector('nav'),
    spans = burger.querySelectorAll('span')

    container.classList.toggle('dark')
    navigation.classList.toggle('move')
    
    spans.forEach((span, index) => {
        switch(index) {
            case 0:
                span.classList.toggle('line1')
                break

            case 1:
                span.classList.toggle('line2')
                break

            case 2:
                span.classList.toggle('line3')
                break
        }
    })
}
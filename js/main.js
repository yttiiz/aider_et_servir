//==========================| Elements |==========================//
const burger = document.querySelector('#burger button'),
container = document.querySelector('.nav-container'),
navigation = container.querySelector('nav'),
spans = burger.querySelectorAll('span')

let switcher = 0

//==========================| Events |==========================//
burger.addEventListener('click', moveMenu)

//==========================| Functions |==========================//
function moveMenu() {
    if (switcher === 0) {
        container.classList.remove('disappear')
        container.classList.add('appear')
        switcher++
    } else {
        container.classList.remove('appear')
        container.classList.add('disappear')
        switcher--
    }

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
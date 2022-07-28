//==========================| Elements |==========================//
const burger = document.querySelector('#burger button'),
container = document.querySelector('.nav-container'),
navigation = container.querySelector('nav'),
spans = burger.querySelectorAll('span'),
covers = document.querySelectorAll('.description-container div')

const images = [
    'https://www.o2.fr/documents/20124/80836/511a-actes-vie-quotidienne-aide-domicile.jpg/55cf5d06-a705-269d-752b-5ea43469034d?t=1584956728246',
    'https://www.o2.fr/documents/20124/80836/512a-preparation-repas-aide-domicile.jpg/0ec0dfd5-e43e-baee-da54-987999d166d9?t=1584956731281',
    'https://www.o2.fr/documents/20124/80836/514a-jardinage-loisir-personne-agee.jpg/86135de2-bb0f-f1c7-8df6-c134a55fb1b7?t=1584956700679'
]

let switcher = 0

//==========================| Events |==========================//
burger.addEventListener('click', moveMenu)
document.addEventListener('DOMContentLoaded', showImages)

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

function showImages() {
    covers.forEach((cover, index) => cover.style.background = `no-repeat center / cover url(${images[index]})`)
}
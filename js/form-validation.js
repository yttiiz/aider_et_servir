//==========================| Element |==========================//
const form = document.querySelector('form')

//==========================| Event |==========================//
form.addEventListener('submit', fakeSubmitData)

//==========================| Function |==========================//
function fakeSubmitData(e) {
    const divInputsList = [].slice.call(e.target.children).filter(item => item.nodeName === 'DIV')
    let checkPoint = 0

    e.preventDefault()
    
    divInputsList.forEach(div => {
        const input = div.children[1]

        if (input.value) {
            if (input.classList.contains('red')) input.classList.remove('red')
            checkPoint++   
        } else {
            input.classList.add('red')
        }
    })

    if (checkPoint === divInputsList.length) {
        divInputsList.forEach(div => div.children[1].value = '')
        alert('Merci pour votre message ! \nNous vous contactons très rapidement.')

        return console.log('Données envoyées au serveur !')
    }

    alert('Vous devez renseigner tous les champs !')
}
 
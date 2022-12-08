//import { DB} from "./database"
const answers = document.querySelectorAll('li')
const message = document.querySelector('.message')
//const spanValue = span.getAttribute('value')
console.log(`${DB[0]}`)
startGame()

function startGame() {
    answers.forEach(answer => {
        answer.addEventListener('click', handleClick)
    })
}

function handleClick(e) {
    const answer = e.target.innerText
    const comparisonResult = answer == "Itálie" ? 'correct' : 'wrong'
    message.innerHTML = comparisonResult
    result()
}

function result() {
    const restartButton = document.createElement('button')
    const innerText = document.createTextNode('restart the game')

    restartButton.appendChild(innerText)

    const element = document.querySelector('.container')
    element.appendChild(restartButton)

    restartButton.addEventListener('click', restartGame)
}

function restartGame() {
    const message = document.querySelector('.message')
    const button = document.querySelector('button')
    message.innerHTML = ''
    button.remove()
}
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

export const DB = [
    {
    question: "Kdo vyhrál MS v roce 2006?",
    "correct answer": 'Itálie',
    A: 'Francie',
    B: 'Itálie',
    C: 'Anglie',
    D: 'Argentina'
},
    {
    question: "Kde se hrálo MS v roce 2002?",
    "correct answer": 'V Japonsku a Koreji',
    A: 'V Brazílii',
    B: 'V USA',
    C: 'V Japonsku a Koreji',
    D: 'V Itálii'
},
    {
    question: "Kdo vyhrál nejvíce MS?",
    "correct answer": 'Brazílie',
    A: 'Brazílie',
    B: 'Německo',
    C: 'Anglie',
    D: 'Argentina'
},
    {
    question: "Kdo vyhrál první MS?",
    "correct answer": 'Uruguay',
    A: 'Francie',
    B: 'Itálie',
    C: 'Jugoslávie',
    D: 'Uruguay'
},
    {
    question: "Kdo je nejlepším střelcem MS?",
    "correct answer": 'Miroslav Klose',
    A: 'Ronaldo',
    B: 'Gerd Muller',
    C: 'Pelé',
    D: 'Miroslav Klose'
},
    {
    question: "Kolikrát se Československo probojovalo do finále MS?",
    "correct answer": 2,
    A: 0,
    B: 1,
    C: 2,
    D: 3
},
    {
    question: "Který hráč dál nejvíce branek během jednoho MS?",
    "correct answer": 'Just Fontaine',
    A: 'Ademir (1950)',
    B: 'Sándor Kocsis (1954)',
    C: 'Just Fontaine (1958)',
    D: 'Gerd Muller (1970)'
}
]
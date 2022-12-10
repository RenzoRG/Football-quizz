//import { DB} from "./database"
const container = document.querySelector('.container')
const answers = document.querySelectorAll('li')
const message = document.querySelector('.message')

startGame()

function startGame() {
    answers.forEach(answer => {
        answer.addEventListener('click', pickedChoice)
    })
}

function pickedChoice(e) {
    const answer = e.target.innerText
    message.innerHTML = answer == "Itálie" ? 'correct' : 'wrong'

    let button = document.querySelector('button')
    if(button == null) {
        button = document.createElement('button')
        const buttonText = document.createTextNode('restart the game')
        button.appendChild(buttonText)
        container.appendChild(button)
    }
    button.addEventListener('click', () => {
        message.innerHTML = ''
        button.remove()
        startGame()
    })
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
const DB = [
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

const container = document.querySelector('.container')
const answers = document.querySelectorAll('li')
const message = document.querySelector('.message')
const winningMessageElement = document.getElementById('winningMessage')
const questionElement = document.querySelector('.question')
const answerAElement = document.querySelector('.A')
const answerBElement = document.querySelector('.B')
const answerCElement = document.querySelector('.C')
const answerDElement = document.querySelector('.D')

let randomQuestion

startGame()

function startGame() {
    randomQuestion = DB[Math.floor(Math.random() * DB.length)]
    questionElement.textContent = `${randomQuestion.question}`
    answerAElement.textContent = `A: ${randomQuestion.A}`
    answerBElement.textContent = `B: ${randomQuestion.B}`
    answerCElement.textContent = `C: ${randomQuestion.C}`
    answerDElement.textContent = `D: ${randomQuestion.D}`
    winningMessageElement.classList.remove('show')
    answers.forEach(answer => {
        answer.removeEventListener('click', handleClick)
        answer.addEventListener('click', handleClick)
        })
    
}

function handleClick(e) {
    const answer = e.target.innerTEXT
    message.innerHTML = answer === randomQuestion['correct answer'] ? 'You are correct!' : 'You are wrong!'
    restartButton()
}

function restartButton() {
    let button = document.querySelector('button')
    if(button == null) {
        button = document.createElement('button')
        const buttonText = document.createTextNode('restart the game')
        button.appendChild(buttonText)
        container.appendChild(button)
    }
    winningMessageElement.classList.add('show')
    button.addEventListener('click', startGame)
}
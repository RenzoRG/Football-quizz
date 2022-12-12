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

startGame()

function startGame() {
    populateQuizz()
    answers.forEach(answer => {
        answer.addEventListener('click', pickedChoice)
    })
}

function pickedChoice(e) {
    const answer = e.target.innerText
    message.innerHTML = answer == "Itálie" ? 'You are correct!' : 'You are wrong!'

    let button = document.querySelector('button')
    if(button == null) {
        button = document.createElement('button')
        const buttonText = document.createTextNode('restart the game')
        button.appendChild(buttonText)
        container.appendChild(button)
    }
    winningMessageElement.classList.add('show')
    button.addEventListener('click', () => {
        winningMessageElement.classList.remove('show')
        startGame()
    })
}

function randomInt(max) {
    return Math.floor(Math.random() * max)
}

function populateQuizz() {
    const randomQuestion = DB[randomInt(DB.length)]
    const question = randomQuestion.question
    const correctQuestion = randomQuestion["correct answer"]
    const answerA = document.createTextNode(`${randomQuestion.A}`)
    const answerB = document.createTextNode(`${randomQuestion.B}`)
    const answerC = document.createTextNode(`${randomQuestion.C}`)
    const answerD = document.createTextNode(`${randomQuestion.D}`)

    questionElement.textContent = ""
    answerAElement.textContent = ""
    answerBElement.textContent = ""
    answerCElement.textContent = ""
    answerDElement.textContent = ""

    questionElement.appendChild(question)
    answerAElement.appendChild(answerA)
    answerBElement.appendChild(answerB)
    answerCElement.appendChild(answerC)
    answerDElement.appendChild(answerD)
}
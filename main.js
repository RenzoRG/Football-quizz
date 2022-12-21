import { DB } from "./database.js"

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
    const answer = e.target.innerText.slice(3)
    message.innerHTML = answer == randomQuestion["correct answer"] ? 'You are correct!' : 'You are wrong!'
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

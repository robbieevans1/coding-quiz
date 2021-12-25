const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const countdownEl = document.getElementById('countdown');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript file link?",
        choice1: "<script>",
        choice2: "<jsfile>",
        choice3: "<js>",
        choice4: "<javascript>",
        answer: 1,
    },
    {
        question: "Where is the correct place to insert JavaScript in HTMl?",
        choice1: "head and body",
        choice2: "body",
        choice3: "head",
        choice4: "header",
        answer: 2,
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choice1: 'src',
        choice2: 'href',
        choice3: 'name',
        choice4: 'id',
        answer: 1,
    },
    {
        question: 'How do you call a function named "myFunction"?',
        choice1: 'myFunction()',
        choice2: 'call myFunction()',
        choice3: 'call function myFunction()',
        choice4: 'var myFunction()',
        answer: 1,
    },
    {
        question: 'Which is NOT a part of a for loop?',
        choice1: 'Variable initialization',
        choice2: 'Condition',
        choice3: 'Psuedo Call',
        choice4: 'Increment',
        answer: 3,
    }
];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startQuiz = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

const startingMinutes = 2;
let time = startingMinutes * 60;

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

    setTimeout(() => {alert("You have run out of time!")}, 120000);
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
    
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})



incrementScore = num => {
    score +=num
    scoreText.innerText = score
}



startQuiz()


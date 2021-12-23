const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choice1: '<script>',
        choice2: '<scripting>',
        choice3: '<js>',
        choice4: '<javascript>',
        answer: A
    }
    {
        question: 'Where is the correct place to insert a JavaScript?',
        choice1: 'head and body',
        choice2: 'body',
        choice3: 'head',
        choice4: 'header',
        answer: B
    }
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choice1: 'src',
        choice2: 'href',
        choice3: 'name',
        choice4: 'id',
        answer: A
    }
    {
        question: 'How do you call a function named "myFunction"?',
        choice1: 'myFunction()',
        choice2: 'call myFunction()',
        choice3: 'call function myFunction()',
        choice4: 'var myFunction()',
        answer: A
    }
    {
        question: 'Which is NOT a part of a for loop?',
        choice1: 'Variable initialization',
        choice2: 'Condition',
        choice3: 'Psuedo Call',
        choice4: 'Increment',
        answer: C
    }
]
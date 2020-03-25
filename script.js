
// my variables

var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerbuttonsElement = document.getElementById("answer-buttons")
var startingMinutes = 10; 
var time = startingMinutes = 60; 
var countDownElement = document.getElementById("countdown")


var shuffleQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})


// my functions

setInterval(updateCountDown, 1000);

function updateCountDown() {
var minutes = Math.floor(time / 60); 
var seconds = time % 10; 

seconds = seconds < 10 ? "0" + seconds : seconds; 

countDownElement.innerHTML = `${minutes}:${seconds}`; 
    time--; 
}



function startGame() {
   /*  console.log("started") */
    startButton.classList.add("hide")
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
     showQuestion(shuffleQuestions[currentQuestionIndex]) 
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerbuttonsElement.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerbuttonsElement.firstChild) {
        answerbuttonsElement.removeChild
        (answerbuttonsElement.firstChild)
    }
}



function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerbuttonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

// questions and and asnwers

var questions = [
    {
        question: "what is 3 + 4?",
        answers: [
            { text: "7", correct: true },
            { text: "25", correct: false }
        ]
        
    },
    {
        question: "what is 12 + 4?",
        answers: [
            { text: "16", correct: true },
            { text: "17", correct: false }
        ]
        
    },
    {
        question: "what is 3 + 97?",
        answers: [
            { text: "100", correct: true },
            { text: "99", correct: false }
        ]
        
    },
    {
        question: "how do you declare a variable?",
        answers: [
            { text: "Var", correct: true },
            { text: "set an array", correct: false },
            { text: "set an object", correct: false},
            { text: "set a function", correct: false},
        ]
    },
{
    question: "what is API?",
    answers: [
        {text: "stands for localstorage", correct: false},
        { text: "its a function", correct: false},
        {text: "Application Interface", correct: true},
        { text: "set an array", correct: false }
    ]
},
{
    question: "what is a Function?",
    answers: [
        { text: "stands for localstorage", correct: false},
        { text: "its a API", correct: false},
        { text: "A block of code that is going to be repeaded or used more than once", correct: true},
        { text: "set an array", correct: false }
    ]
},
{
    question: "what is the purpose of client-side storage?",
    answers: [
        { text: "stands for localstorage", correct: false},
        { text: " to store a little information that will save not restart when you refresh the page", correct: true},
        { text: "A block of code that is going to be repeaded or used more than once", correct: false},
        { text: "set an array", correct: false }
    ]
},
{
    question: "what are 3 fundmental concepts of programing?",
    answers: [
        { text: "Variables", correct: false},
        { text: " control Structure", correct: false},
        { text: "Data structure ", correct: false},
        { text: "All of above", correct: true},
     
    ]
},
{
    question: "what is the purpose of client-side storage?",
    answers: [
        { text: "stands for localstorage", correct: false},
        { text: " to store a little information that will save not restart when you refresh the page", correct: true},
        { text: "A block of code that is going to be repeaded or used more than once", correct: false},
        { text: "set an array", correct: false }
    ]
},
]
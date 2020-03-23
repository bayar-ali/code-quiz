var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerbuttonsElement = document.getElementById("answer-buttons")

var shuffleQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    console.log("started")
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
        answerbuttonsElement.removeChild(answerbuttonsElement.firstChild)
    }
}



function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerbuttonsElement.children).forEach(button => {
        setsStatusClass(button, button.dataset.correct)
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

var questions = [
    {
        question: "what is 3 + 4?",
        answers: [
            { text: "7", correct: true },
            { text: "25", correct: false }
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
}
]
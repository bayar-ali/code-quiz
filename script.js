
// my variables

var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")



// timer 



var timeElement = document.querySelector("#countdown");

var secondsRemaining = 40;



var intervalId = setInterval(function () {
    secondsRemaining--;
    timeElement.textContent = secondsRemaining 



    if (secondsRemaining === 0) {
        alert("Time is up")
        clearInterval(intervalId);

        var mainDiv = document.querySelector("#main");


    }
}, 1000);



//end of timer


var shuffleQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()

})


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
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
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

// questions and and answers

var questions = [

    {
        question: "how do you declare a variable?",
        answers: [
            { text: "Var", correct: true },
            { text: "set an array", correct: false },
            { text: "set an object", correct: false },
            { text: "set a function", correct: false },
        ]
    },
    {
        question: "what is API?",
        answers: [
            { text: "stands for localstorage", correct: false },
            { text: "its a function", correct: false },
            { text: "Application Interface", correct: true },
            { text: "set an array", correct: false }
        ]
    },
    {
        question: "what is a Function?",
        answers: [
            { text: "stands for localstorage", correct: false },
            { text: "its a API", correct: false },
            { text: "A block of code that is going to be repeaded or used more than once", correct: true },
            { text: "set an array", correct: false }
        ]
    },
    {
        question: "what is the purpose of client-side storage?",
        answers: [
            { text: "stands for localstorage", correct: false },
            { text: " to store a little information that will save not restart when you refresh the page", correct: true },
            { text: "A block of code that is going to be repeaded or used more than once", correct: false },
            { text: "set an array", correct: false }
        ]
    },
    {
        question: "what are 3 fundmental concepts of programing?",
        answers: [
            { text: "Variables", correct: false },
            { text: " control Structure", correct: false },
            { text: "Data structure ", correct: false },
            { text: "All of above", correct: true },

        ]
    },
    {
        question: "what is the purpose of client-side storage?",
        answers: [
            { text: "stands for localstorage", correct: false },
            { text: " to store a little information that will save not restart when you refresh the page", correct: true },
            { text: "A block of code that is going to be repeaded or used more than once", correct: false },
            { text: "set an array", correct: false }
        ]
    },
]
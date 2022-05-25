/* start quiz code */

/* button variable */
var start = document.querySelector("#start");

/*  timer variables */
var score = document.querySelector("#score");
var time = document.querySelector(".timer");
var secLeft = 80;

/* start quiz variable */
var quizStart = document.querySelector("#challenge-section");

/* load hidden elements */
var questionsEl = document.querySelector(".questions-lists");

var questionEl = document.querySelector("#question");
var rightWrong = document.querySelector("#results");
var questionCount = 0;

/* final score  */
var finalScoreEl = document.querySelector("#final");
var initialInput = document.querySelector("#initials");

/* high score */
var highScoreEl = document.querySelector("#high-score-section");
var scoreListEl = document.querySelector(".scores-list");
var scoreList = [];

/* answer button */
var answerBtn = document.querySelector("button.answers-btn");

/* quiz questions array */
var questions = [
    {
    question: "How do you create a function in JavaScript?",
    answers: ["1) function = myFunction()", "2) function myFunction()", "3) function:myFunction()", "4) functionMyFunction()"],
    correct: "1"
    },
    {
    question: "Which sign turns 'true' into 'false'?",
    answers: ["1) ?", "2) -", "3) |", "4) !"],
    correct: "3"
    },
    {
    question: "How can you add a comment in JavaScript?",
    answers: ["1) <!-- This is a comment -->", "2) -This is a comment-", "3) // This is a comment", "4) 'This is a comment'"],
    correct: "2"
    },
    {
    question: "What event occurs when a user clicks on an HTML element?",
    answers: ["1) onclick", "2) onmouseover", "3) onchange", "4) onmouseclick"],
    correct: "0"
    }
];

/* timer start function */
function setTime() {
    var timerInterval = setInterval(function () {
        secLeft--;
        time.textContent = 'Time:${secondsLeft}s';

        if (secLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalScoreEl.style.display = "block";
            score.textContent = secLeft;
        }
    }, 1000);
}

/* start quiz function */
function startQuiz() {
    quizStart.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}

/* question show function */
function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ansBtn1.textContent = questions[id].answers[0];
        ansBtn2.textContent = questions[id].answers[1];
        ansBtn3.textContent = questions[id].answers[2];
        ansBtn4.textContent = questions[id].answers[3];
    }
}
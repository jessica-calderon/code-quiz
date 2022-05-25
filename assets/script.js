/* start quiz code */

/* button variable */
var start = document.querySelector("#start");

/*  timer variables */
var score = document.querySelector("#score");
var time = document.querySelector(".timer");
var secLeft = 80;

/* start quiz variable */
var quizStart = document.querySelector("#challenge-section");

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
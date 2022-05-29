/* start quiz code */

/*  timer variables */
var score = document.querySelector("#score");
var time = document.querySelector(".timer");
var secLeft = 80;

/* button variable */
const start = document.querySelector("#start");


/* start quiz variable */
const begin = document.querySelector("#quiz-section");

/* load hidden elements */
var questionsEl = document.querySelector(".questions-lists");

let questionEl = document.querySelector("#question");
const rightWrong = document.querySelector("#results");
let questionCount = 0;

/* final score  */
const finalScoreEl = document.querySelector("#final");
let initialInput = document.querySelector("#initials");

/* high score */
const highScoreEl = document.querySelector("#high-score-section");
let scoreListEl = document.querySelector(".scores-list");
let scoreList = [];

/* answer button */
const answerBtn = document.querySelectorAll("button.answers-btn");

/* submit, start, view, and clear variables */
let submitBtn = document.querySelector("#sub-btn");
let clearBtn = document.querySelector("#clear");
let hsBtn = document.querySelector("#hs-btn");
let backBtn = document.querySelector("#back");

/* answer variables */
const ansBtn1 = document.querySelector("#answer-0");
const ansBtn2 = document.querySelector("#answer-1");
const ansBtn3 = document.querySelector("#answer-2");
const ansBtn4 = document.querySelector("#answer-3");


/* quiz questions array */
const questions = [
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
    let timerInterval = setInterval(function () {
        secLeft--;
        time.textContent = `Timer: ${secLeft} seconds`;

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
    begin.style.display = "none";
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

/* check answers function */
function checkAnswers(event) {
    event.preventDefault();

    /* right-wrong element */
    rightWrong.style.display = "block";
    let p = document.createElement("p");
    rightWrong.appendChild(p);

    /* display right-wrong for specified time */
    setTimeout(function () {
        p.style.display = "none";
    }, 1000);

    /* display right on right answer */
    if (questions[questionCount].correct === event.target.value) {
        p.textContent = "Correct!";
    }

    /* display wrong on wrong answer */
    else if (questions[questionCount].correct !== event.target.value) {
        secLeft = secLeft - 10;
        p.textContent = "Incorrect!";
    }


    if (questionCount < questions.length) {
        questionCount++;
    }
    setQuestion(questionCount);
}

    function addScore(event) {
        event.preventDefault();

        finalScoreEl.style.display = "none";
        highScoreEl.style.display = "block";

        let init = initialInput.value.toUpperCase();
        scoreList.push({ initials: init, score: secLeft });

        /* sort hs-list */
        scoreList = scoreList.sort((a, b) => {
            if (a.score < b.score) {
                return 1;
            } else {
                return -1;
            }
            });

            scoreListEl.innerHTML="";
            for (let i = 0; i < scoreList.length; i++) {
                let li = document.createElement("li");
                li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
                scoreListEl.append(li);
            }

            /* hs list storage */
            storeHs();
            displayScores();
        }
        function storeHs() {
            localStorage.setItem("scoreList", JSON.stringify(scoreList));
        }

        function displayScores() {

            let savedScores = JSON.parse(localStorage.getItem("scoreList"));
            if (savedScores !== null) {
                scoreList = savedScores;
            }
        }
/* clear local storage high scores */
function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML="";
}

    /* function to start quiz */
    start.addEventListener("click", startQuiz);

answerBtn.forEach(item => {
    item.addEventListener('click', checkAnswers);
});

    /* add hs to list */
    submitBtn.addEventListener("click", addScore);

    /* back event function */
    backBtn.addEventListener("click", function () {
        highScoreEl.style.display = "none";
        begin.style.display = "block";
        secLeft = 80;
        time.textContent = `Timer: ${secLeft} seconds`;
    });

    /* clear btn */
    clearBtn.addEventListener("click", clearScores);

    /* no score message display and listener event */
hsBtn.addEventListener("click", function () {
    if (highScoreEl.style.display === "none") {
        highScoreEl.style.display = "block";
    }
    else if (highScoreEl.style.display === "block") {
        highScoreEl.style.display = "none";
    }
    else {
        return alert("Please take the quiz to view high scores!");
    }
});

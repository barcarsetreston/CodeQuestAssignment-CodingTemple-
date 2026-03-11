const quizData = [
{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "High Tech Machine Learning",
        "Home Tool Markup Language",
        "Hyper Transfer Machine Language"
    ],
    answer: 0
},
{
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: 1
},
{
    question: "Which keyword declares a block-scoped variable?",
    options: ["var", "const", "let", "Both let and const"],
    answer: 3
},
{
    question: "Which method converts a JSON string into an object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
    answer: 1
},
{
    question: "Which HTML tag is used to include JavaScript?",
    options: ["<javascript>", "<js>", "<script>", "<code>"],
    answer: 2
}
];


const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const progress = document.getElementById("progress");

const quizContainer = document.getElementById("quiz-container");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");

const startContainer = document.getElementById("start-container");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");


let currentQuestionIndex = 0;
let score = 0;


startButton.addEventListener("click", () => {

    startContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    loadQuestion();

});


function loadQuestion() {

    const currentQuestion = quizData[currentQuestionIndex];

    progress.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;

    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;

        button.classList.add("option-btn");

        button.addEventListener("click", () => selectOption(index));

        optionsContainer.appendChild(button);

    });

}


function selectOption(selectedIndex) {

    const currentQuestion = quizData[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll("button");

    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === currentQuestion.answer) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && index !== currentQuestion.answer) {
            button.classList.add("wrong");
        }

    });

    if (selectedIndex === currentQuestion.answer) {
        score++;
    }

}


nextButton.addEventListener("click", () => {

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }

});


function showScore() {

    quizContainer.classList.add("hidden");
    scoreContainer.classList.remove("hidden");

    scoreElement.textContent = `You scored ${score} out of ${quizData.length}`;

}


restartButton.addEventListener("click", () => {

    currentQuestionIndex = 0;
    score = 0;

    scoreContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    loadQuestion();

});
const options = document.querySelectorAll(".radioBtn");
const nextBtn = document.querySelector(".btn");
const question = document.getElementById("question");
const opt_A = document.getElementById("optionA");
const opt_B = document.getElementById("optionB");
const opt_C = document.getElementById("optionC");
const opt_D = document.getElementById("optionD");
const score = document.querySelector(".score");
const restartBtn = document.querySelector(".btn_restart");

const questions = [
    {
        question: "What does HTML stand for?",
        optiona: "HyperText Markup Language",
        optionb: "Home Tool Markup Language",
        optionc: "Hyperlinks and Text Markup Language",
        optiond: "Hyper Tool Markup Language",
        correctOption: "a",
    },
    {
        question: "What does CSS stand for?",
        optiona: "Computer Style Sheets",
        optionb: "Cascading Style Sheets",
        optionc: "Creative Style Sheets",
        optiond: "Colorful Style Sheets",
        correctOption: "b",
    },
    {
        question: "Which HTML element is used for the largest heading?",
        optiona: "<heading>",
        optionb: "<h6>",
        optionc: "<h1>",
        optiond: "<head>",
        correctOption: "c",
    },
    {
        question: "Which CSS property controls text size?",
        optiona: "font-size",
        optionb: "text-style",
        optionc: "font-style",
        optiond: "text-size",
        correctOption: "a",
    },
    {
        question: "Which tag is used for inserting a line break?",
        optiona: "<break>",
        optionb: "<br>",
        optionc: "<lb>",
        optiond: "<ln>",
        correctOption: "b",
    },
    {
        question: "What does JS stand for?",
        optiona: "JavaServer",
        optionb: "JavaScript",
        optionc: "JScript",
        optiond: "JustScript",
        correctOption: "b",
    },
    {
        question: "Which HTML attribute specifies an image's alt text?",
        optiona: "alt-text",
        optionb: "alt",
        optionc: "src",
        optiond: "title",
        correctOption: "b",
    },
    {
        question: "Which property is used to change the background color in CSS?",
        optiona: "background-color",
        optionb: "bg-color",
        optionc: "color-bg",
        optiond: "color-background",
        correctOption: "a",
    },
    {
        question: "Which HTML element is used for making hyperlinks?",
        optiona: "<link>",
        optionb: "<a>",
        optionc: "<href>",
        optiond: "<url>",
        correctOption: "b",
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        optiona: "// This is a comment",
        optionb: "<!-- This is a comment -->",
        optionc: "/* This is a comment */",
        optiond: "# This is a comment",
        correctOption: "a",
    },
];

// Variables
let startingIndex = 0;
let current_score = 0;
let flag = false;

// Load the first question on page load
window.onload = () => {
    nextQuestion();
};

// Function to load the next question
function nextQuestion() {
    const currentQuestion = questions[startingIndex];
    question.innerText = currentQuestion.question;

    // Assign options dynamically and link labels properly
    document.getElementById("a").value = "a";
    document.getElementById("b").value = "b";
    document.getElementById("c").value = "c";
    document.getElementById("d").value = "d";

    opt_A.innerText = currentQuestion.optiona;
    opt_B.innerText = currentQuestion.optionb;
    opt_C.innerText = currentQuestion.optionc;
    opt_D.innerText = currentQuestion.optiond;

    // Reset styles and values for the next question
    options.forEach(option => {
        option.checked = false;
        option.disabled = false;
        option.nextElementSibling.style.border = "";
        option.nextElementSibling.style.boxShadow = "";
    });

    flag = false;
    score.innerText = current_score;
    document.querySelector(".question-no").innerText = startingIndex + 1;
}

// Next button functionality
nextBtn.addEventListener("click", () => {
    if (!flag) {
        alert("Please select an option before proceeding.");
        return;
    }

    if (startingIndex < questions.length - 1) {
        startingIndex++;
        nextQuestion();
    } else {
        document.querySelector(".main-section").classList.add("none");
        document.querySelector(".quiz-over").classList.remove("none");
        document.querySelector(".final_score").innerText = current_score;
    }
});

// Option selection functionality
options.forEach(option => {
    option.addEventListener("input", () => {
        const correctOptionId = questions[startingIndex].correctOption;

        options.forEach(opt => (opt.disabled = true));

        if (option.value === correctOptionId) {
            option.nextElementSibling.style.border = "2px solid green";
            option.nextElementSibling.style.boxShadow = "0 0 2px 2px green";
            current_score++;
        } else {
            const correctOptionElement = document.getElementById(correctOptionId);
            correctOptionElement.nextElementSibling.style.border = "2px solid green";
            correctOptionElement.nextElementSibling.style.boxShadow = "0 0 2px 2px green";
        }
        flag = true;
    });
});

// Restart the quiz
function restart() {
    startingIndex = 0;
    current_score = 0;
    document.querySelector(".main-section").classList.remove("none");
    document.querySelector(".quiz-over").classList.add("none");
    nextQuestion();
}

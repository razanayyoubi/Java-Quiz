const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", function () {
    document.getElementById("welcome-page").classList.add("hidden");
    document.getElementById("quiz-page").classList.remove("hidden");
    showQuestion();
});

// Data (questions, options, ans)
const questions = [
    {
        question: "Which of these keywords is used to handle exceptions?",
        options: ["try", "throw", "catch", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the output of: System.out.println(10 + 20 + '30');",
        options: ["3030", "102030", "3020", "102030"],
        answer: "3030"
    },
    {
        question: "Which statement about String in Java is true?",
        options: ["Strings are mutable", "Strings are immutable", "Strings cannot be concatenated", "Strings are primitive"],
        answer: "Strings are immutable"
    },
    {
        question: "What is the default value of a boolean in Java?",
        options: ["true", "false", "0", "null"],
        answer: "false"
    },
    {
        question: "Which keyword is used to create a subclass?",
        options: ["super", "this", "extends", "implements"],
        answer: "extends"
    },
    {
        question: "What will this print? int x = 5; System.out.println(x++);",
        options: ["5", "6", "Error", "0"],
        answer: "5"
    },
    {
        question: "Which method is not part of the Object class?",
        options: ["equals()", "hashCode()", "compareTo()", "toString()"],
        answer: "compareTo()"
    },
    {
        question: "Which of these is a checked exception?",
        options: ["NullPointerException", "IOException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
        answer: "IOException"
    },
    {
        question: "Which access modifier allows subclasses in other packages to access a member?",
        options: ["private", "default", "protected", "public"],
        answer: "protected"
    },
    {
        question: "Which keyword is used to call the parent class constructor?",
        options: ["super", "this", "parent", "base"],
        answer: "super"
    }
];

let currentQuestion = 0;
let score = 0;

// Show Question
function showQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question").innerText = questionData.question;
    document.getElementById("question-number").innerText =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    questionData.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.className =
            "bg-rose-800 text-white font-medium px-4 py-3 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-pink-200 hover:text-gray-900";

        btn.onclick = function () {
            // Show correct/incorrect
            if (option === questionData.answer) {
                btn.style.background = "green";
                score++;
            } else {
                btn.style.background = "red";
            }

            // Move to next question after 1 second
            setTimeout(() => {
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    showResults();
                }
            }, 500);
        };

        choicesDiv.appendChild(btn);
    });
}


// Check Answer
function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    document.getElementById("quiz-page").classList.add("hidden");
    const resultsPage = document.getElementById("results-page");
    resultsPage.classList.remove("hidden");

    // Update the score
    document.getElementById("score-display").innerText = score;
}

const questions = [
    {
        question: "When was the Indian Constitution adopted?",
        answers: ["1947", "1950", "1949", "1951"],
        correct: "1949"
    },
    {
        question: "Who is known as the father of the Indian Constitution?",
        answers: ["Mahatma Gandhi", "B.R. Ambedkar", "Jawaharlal Nehru", "Rajendra Prasad"],
        correct: "B.R. Ambedkar"
    },
    {
        question: "How many fundamental rights are mentioned in the Indian Constitution?",
        answers: ["6", "7", "8", "9"],
        correct: "6"
    },
    {
        question: "Which part of the Indian Constitution deals with Fundamental Rights?",
        answers: ["Part III", "Part IV", "Part V", "Part VI"],
        correct: "Part III"
    },
    {
        question: "The concept of Directive Principles of State Policy was borrowed from which country?",
        answers: ["USA", "Ireland", "Britain", "France"],
        correct: "Ireland"
    },
    {
        question: "The Indian Constitution was enforced on?",
        answers: ["26th January 1950", "15th August 1947", "2nd October 1949", "26th November 1950"],
        correct: "26th January 1950"
    },
    {
        question: "Which of the following is a Constitutional Body?",
        answers: ["National Human Rights Commission", "Finance Commission", "Election Commission", "All of the above"],
        correct: "All of the above"
    },
    {
        question: "What is the minimum age required to become the President of India?",
        answers: ["30 years", "35 years", "40 years", "45 years"],
        correct: "35 years"
    },
    {
        question: "Which part of the Indian Constitution mentions the Union and its Territory?",
        answers: ["Part I", "Part II", "Part III", "Part IV"],
        correct: "Part I"
    },
    {
        question: "What is the tenure of the President of India?",
        answers: ["4 years", "5 years", "6 years", "7 years"],
        correct: "5 years"
    }
];

let shuffledQuestions, currentQuestionIndex, score, timeLeft;
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultElement = document.getElementById('result');
const timerElement = document.getElementById('timer');

function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);  // Shuffle and pick 10 random questions
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 120;
    nextQuestion();
    startTimer();
}

function nextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => selectAnswer(button, question.correct);
        answersElement.appendChild(button);
    });
}

function resetState() {
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(button, correctAnswer) {
    if (button.textContent === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        nextQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    const countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft} seconds`;
        if (timeLeft <= 0 || currentQuestionIndex >= shuffledQuestions.length) {
            clearInterval(countdown);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    resultElement.textContent = `Quiz over! You scored ${score} out of ${shuffledQuestions.length}`;
    timerElement.textContent = "Time's up!";
    resetState();  // Clear answers and questions
}

// Start the quiz when the page loads
window.onload = startQuiz;

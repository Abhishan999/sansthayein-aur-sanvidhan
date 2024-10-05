const questions = [
    {
        question: "When was the Indian Constitution adopted?",
        answers: ["1947", "1950", "1949", "1951"],
        correct: "1950"
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
        correct: "Part IV"
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
    },
];

// Variables to track quiz progress
let shuffledQuestions, currentQuestionIndex, score, timeLeft;
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultElement = document.getElementById('result');
const timerElement = document.getElementById('timer');
const nextButton = document.getElementById('next-button');

// Function to start the quiz
function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);  // Shuffle and pick 10 random questions
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 120;
    nextButton.style.display = 'none';  // Hide next button initially
    resultElement.textContent = '';
    nextQuestion();
    startTimer();
}

// Function to show the next question
function nextQuestion() {
    resetState();
    nextButton.style.display = 'none'; // Hide next button after showing question
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

// Function to display a question and its answers
function showQuestion(question) {
    questionElement.textContent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => selectAnswer(button, question.correct);
        answersElement.appendChild(button);
    });
}

// Function to reset state (clear previous question and answers)
function resetState() {
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
    nextButton.style.display = 'none'; // Hide next button after question is reset
}

// Function to handle answer selection
function selectAnswer(button, correctAnswer) {
    const isCorrect = button.textContent === correctAnswer;
    button.classList.add(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) {
        score++;
    }
    Array.from(answersElement.children).forEach(btn => {
        btn.disabled = true; // Disable all buttons after selection
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        }
    });
    nextButton.style.display = 'block'; // Show next button after answer is selected
    currentQuestionIndex++;
}

// Function to start the timer
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

// Function to end the quiz and show the result
function endQuiz() {
    resultElement.textContent = `Quiz over! You scored ${score}/${shuffledQuestions.length}.`;
    resultElement.classList.add(score >= 5 ? 'correct' : 'wrong');
}

// Start the quiz immediately when the page loads
startQuiz();

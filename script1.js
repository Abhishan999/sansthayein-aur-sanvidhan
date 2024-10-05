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
    },
];

// Variables to track the quiz progress
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
    nextButton.style.display = 'none'; // Hide the next button initially
    resultElement.textContent = '';
    nextQuestion();
    startTimer();
}

// Function to show the next question
function nextQuestion() {
    resetState();
    nextButton.style.display = 'none'; // Hide the next button after

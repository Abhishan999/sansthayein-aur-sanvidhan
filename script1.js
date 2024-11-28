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
    {
        question: "Who was the first Prime Minister of India?",
        answers: ["Jawaharlal Nehru", "Indira Gandhi", "Rajendra Prasad", "Vikram Sarabhai"],
        correct: "Jawaharlal Nehru"
    },
    {
        question: "Which Article of the Indian Constitution guarantees the Right to Equality?",
        answers: ["Article 14", "Article 15", "Article 16", "Article 17"],
        correct: "Article 14"
    },
    {
        question: "Which part of the Indian Constitution deals with the amendment procedure?",
        answers: ["Part XX", "Part XVIII", "Part X", "Part XIX"],
        correct: "Part XX"
    },
    {
        question: "Who was the first woman Prime Minister of India?",
        answers: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Kamalapati Tripathi"],
        correct: "Indira Gandhi"
    },
    {
        question: "What is the minimum age required to become the Governor of a state in India?",
        answers: ["25 years", "30 years", "35 years", "40 years"],
        correct: "35 years"
    },
    {
        question: "Who presides over the meetings of the Rajya Sabha?",
        answers: ["The President of India", "The Vice President of India", "The Speaker of Lok Sabha", "The Prime Minister"],
        correct: "The Vice President of India"
    },
    {
        question: "Which of the following is a feature of the Indian Constitution?",
        answers: ["Federal system of government", "Unitary system of government", "Both federal and unitary system", "None of the above"],
        correct: "Both federal and unitary system"
    },
    {
        question: "Which country’s constitution served as a model for India’s Constitution?",
        answers: ["USA", "United Kingdom", "Ireland", "Canada"],
        correct: "United Kingdom"
    },
    {
        question: "Which Indian state has the highest number of districts?",
        answers: ["Uttar Pradesh", "Madhya Pradesh", "Maharashtra", "Bihar"],
        correct: "Madhya Pradesh"
    },
    {
        question: "Who is known as the 'Architect of the Indian Constitution'?",
        answers: ["Mahatma Gandhi", "B.R. Ambedkar", "Jawaharlal Nehru", "Subhas Chandra Bose"],
        correct: "B.R. Ambedkar"
    },
    {
        question: "Which Article of the Indian Constitution defines the jurisdiction of the Supreme Court?",
        answers: ["Article 124", "Article 131", "Article 143", "Article 136"],
        correct: "Article 131"
    },
    {
        question: "Which of the following is not a Fundamental Right under the Indian Constitution?",
        answers: ["Right to Equality", "Right to Education", "Right to Freedom of Speech", "Right to Property"],
        correct: "Right to Property"
    },
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
    {
        question: "Who was the first Prime Minister of India?",
        answers: ["Jawaharlal Nehru", "Indira Gandhi", "Rajendra Prasad", "Vikram Sarabhai"],
        correct: "Jawaharlal Nehru"
    },
    {
        question: "Which Article of the Indian Constitution guarantees the Right to Equality?",
        answers: ["Article 14", "Article 15", "Article 16", "Article 17"],
        correct: "Article 14"
    },
    {
        question: "Which part of the Indian Constitution deals with the amendment procedure?",
        answers: ["Part XX", "Part XVIII", "Part X", "Part XIX"],
        correct: "Part XX"
    },
    {
        question: "Who was the first woman Prime Minister of India?",
        answers: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Kamalapati Tripathi"],
        correct: "Indira Gandhi"
    },
    {
        question: "What is the minimum age required to become the Governor of a state in India?",
        answers: ["25 years", "30 years", "35 years", "40 years"],
        correct: "35 years"
    },
    {
        question: "Who presides over the meetings of the Rajya Sabha?",
        answers: ["The President of India", "The Vice President of India", "The Speaker of Lok Sabha", "The Prime Minister"],
        correct: "The Vice President of India"
    },
    {
        question: "Which of the following is a feature of the Indian Constitution?",
        answers: ["Federal system of government", "Unitary system of government", "Both federal and unitary system", "None of the above"],
        correct: "Both federal and unitary system"
    },
    {
        question: "Which country’s constitution served as a model for India’s Constitution?",
        answers: ["USA", "United Kingdom", "Ireland", "Canada"],
        correct: "United Kingdom"
    },
    {
        question: "Which Indian state has the highest number of districts?",
        answers: ["Uttar Pradesh", "Madhya Pradesh", "Maharashtra", "Bihar"],
        correct: "Madhya Pradesh"
    },
    {
        question: "Who is known as the 'Architect of the Indian Constitution'?",
        answers: ["Mahatma Gandhi", "B.R. Ambedkar", "Jawaharlal Nehru", "Subhas Chandra Bose"],
        correct: "B.R. Ambedkar"
    },
    {
        question: "Which Article of the Indian Constitution defines the jurisdiction of the Supreme Court?",
        answers: ["Article 124", "Article 131", "Article 143", "Article 136"],
        correct: "Article 131"
    },
    {
        question: "Which of the following is not a Fundamental Right under the Indian Constitution?",
        answers: ["Right to Equality", "Right to Education", "Right to Freedom of Speech", "Right to Property"],
        correct: "Right to Property"
    },
    {
        question: "Which is the longest river in India?",
        answers: ["Ganges", "Yamuna", "Indus", "Brahmaputra"],
        correct: "Ganges"
    },
    {
        question: "Which city is the capital of India?",
        answers: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
        correct: "New Delhi"
    },
    {
        question: "Who was the first President of India?",
        answers: ["Jawaharlal Nehru", "Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "V. V. Giri"],
        correct: "Rajendra Prasad"
    },
    {
        question: "Which of the following states is known as the 'Land of the Rising Sun'?",
        answers: ["Arunachal Pradesh", "Sikkim", "Nagaland", "Meghalaya"],
        correct: "Arunachal Pradesh"
    },
    {
        question: "Which of these is not a feature of the Indian Constitution?",
        answers: ["Secular State", "Sovereign State", "Monarchical State", "Republic State"],
        correct: "Monarchical State"
    },
    {
        question: "Which Indian state has the largest population?",
        answers: ["Madhya Pradesh", "Uttar Pradesh", "Bihar", "Maharashtra"],
        correct: "Uttar Pradesh"
    },
    {
        question: "What is the official language of India?",
        answers: ["Hindi", "English", "Both Hindi and English", "Sanskrit"],
        correct: "Both Hindi and English"
    },
    {
        question: "Which is the highest civilian award in India?",
        answers: ["Padma Bhushan", "Bharat Ratna", "Padma Vibhushan", "Padma Shri"],
        correct: "Bharat Ratna"
    },
    {
        question: "Who was the first Chief Justice of India?",
        answers: ["Harilal Jekisundas Kania", "K.N. Wanchoo", "M. Hidayatullah", "P. B. Gajendragadkar"],
        correct: "Harilal Jekisundas Kania"
    },
    {
        question: "Which is the largest state in India by area?",
        answers: ["Uttar Pradesh", "Rajasthan", "Madhya Pradesh", "Maharashtra"],
        correct: "Rajasthan"
    },
    {
        question: "What is the name of the national flower of India?",
        answers: ["Rose", "Lotus", "Tulip", "Sunflower"],
        correct: "Lotus"
    },
    {
        question: "Which year did India gain independence?",
        answers: ["1942", "1947", "1950", "1952"],
        correct: "1947"
    },
    {
        question: "Which is the national animal of India?",
        answers: ["Lion", "Tiger", "Elephant", "Peacock"],
        correct: "Tiger"
    }
];
function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 50);  // Shuffle and pick 50 random questions
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 120;
    nextButton.style.display = 'none';  // Hide next button initially
    resultElement.textContent = '';
    nextQuestion();
    startTimer();
}


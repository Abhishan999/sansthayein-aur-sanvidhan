const constitutionWords = [
    { word: "AMENDMENT", hint: "An official change or addition to the Constitution" },
    { word: "FREEDOM", hint: "The power or right to act, speak, or think as one wants" },
    { word: "RIGHTS", hint: "Legal, social, or ethical principles of freedom" },
    { word: "DEMOCRACY", hint: "A system of government where citizens elect representatives" },
    { word: "VOTE", hint: "A formal expression of preference for a candidate or issue" },
    { word: "PRESIDENT", hint: "The head of state and government in the United States" },
    { word: "SENATE", hint: "The upper chamber of the United States Congress" },
    { word: "JUDICIARY", hint: "The branch of government that interprets the laws" },
    { word: "CONGRESS", hint: "The national legislative body of the U.S., consisting of the Senate and House of Representatives" },
    { word: "EQUALITY", hint: "The state of being equal in rights, status, or opportunities" },
    { word: "LIBERTY", hint: "The state of being free within society from oppressive restrictions" },
    { word: "SUPREME", hint: "The highest authority in law, such as the U.S. Supreme Court" },
    { word: "CITIZEN", hint: "A legally recognized subject or national of a state or commonwealth" },
    { word: "JUSTICE", hint: "The maintenance or administration of what is just" },
    { word: "LAW", hint: "A system of rules created and enforced by governmental institutions" },
    { word: "VETO", hint: "A constitutional right to reject a decision or proposal made by a law-making body" },
    { word: "BALANCE", hint: "An equal distribution of power among branches of government" },
    { word: "FEDERALISM", hint: "The mixed or compound mode of government that combines general government with regional governments" },
    { word: "PARDON", hint: "The action of forgiving or being forgiven for an error or offense" },
    { word: "BILL", hint: "A proposal for new legislation presented for approval" }
];

const gridSize = 10;
const gridElement = document.getElementById('grid');
const wordListElement = document.getElementById('words');
const hintListElement = document.getElementById('hints');
const submitButton = document.getElementById('submit-btn');
const scoreContainer = document.getElementById('score-container');
let selectedCells = [];
let foundWords = [];

// Create the grid
const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(''));

// Randomize Constitution words
function getRandomWords(numWords) {
    const shuffledWords = [...constitutionWords];
    for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
    }
    return shuffledWords.slice(0, numWords);
}

function fillGrid() {
    // Fill grid with random letters
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (!grid[i][j]) {
                grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
        }
    }

    gridElement.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = grid[i][j];
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', () => selectCell(cell));
            gridElement.appendChild(cell);
        }
    }
}

function placeWords(words) {
    words.forEach(({ word }) => {
        let placed = false;
        while (!placed) {
            const row = Math.floor(Math.random() * gridSize);
            const col = Math.floor(Math.random() * (gridSize - word.length));
            let fits = true;

            for (let i = 0; i < word.length; i++) {
                if (grid[row][col + i] !== '') {
                    fits = false;
                    break;
                }
            }

            if (fits) {
                for (let i = 0; i < word.length; i++) {
                    grid[row][col + i] = word[i];
                }
                placed = true;
            }
        }
    });
}

function selectCell(cell) {
    if (!cell.classList.contains('found')) {
        if (!cell.classList.contains('selected')) {
            cell.classList.add('selected');
            selectedCells.push(cell);
        } else {
            cell.classList.remove('selected');
            selectedCells = selectedCells.filter(selectedCell => selectedCell !== cell);
        }
        checkWord();
    }
}

function checkWord() {
    const selectedWord = selectedCells.map(cell => cell.textContent).join('');
    const foundWord = wordsToFind.find(({ word }) => word === selectedWord);

    if (foundWord) {
        selectedCells.forEach(cell => {
            cell.classList.add('found');
            cell.classList.remove('selected');
        });
        selectedCells = [];
        if (!foundWords.includes(foundWord.word)) {
            foundWords.push(foundWord.word);
        }
        markWordAsFound(foundWord.word);
    }
}

function markWordAsFound(word) {
    const wordItems = Array.from(wordListElement.children);
    const matchedItem = wordItems.find(item => item.textContent === word);
    if (matchedItem) {
        matchedItem.style.textDecoration = 'line-through';
        matchedItem.style.color = 'green';
    }
}

function showScore() {
    const score = foundWords.length;
    scoreContainer.innerHTML = `<h3>Your Score: ${score}/${wordsToFind.length}</h3>`;
}

submitButton.addEventListener('click', showScore);

function init() {
    const randomWords = getRandomWords(5); // Get 5 random Constitution-related words
    placeWords(randomWords);
    fillGrid();

    randomWords.forEach(({ word, hint }) => {
        const liWord = document.createElement('li');
        liWord.textContent = word;
        wordListElement.appendChild(liWord);

        const liHint = document.createElement('li');
        liHint.textContent = `${word}: ${hint}`;
        hintListElement.appendChild(liHint);
    });
}

// Start the game
init();

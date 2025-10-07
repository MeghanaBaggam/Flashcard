// 1. Store flashcard data in a JavaScript array
const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 7 * 8?", answer: "56" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "What is the chemical symbol for gold?", answer: "Au" }
];

// 2. Set up DOM references and state
let currentCardIndex = 0;
const flashcardElement = document.querySelector('.flashcard');
const questionElement = document.getElementById('flashcard-question');
const answerElement = document.getElementById('flashcard-answer');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

// 3. Define functions
function displayCard() {
    const card = flashcards[currentCardIndex];
    questionElement.textContent = card.question;
    answerElement.textContent = card.answer;
    answerElement.classList.add('hidden');
    flashcardElement.classList.remove('flipped');
}

function flipCard() {
    const isFlipped = flashcardElement.classList.contains('flipped');
    if (isFlipped) {
        // If flipped, show question
        answerElement.classList.add('hidden');
        flashcardElement.classList.remove('flipped');
    } else {
        // If not flipped, show answer
        answerElement.classList.remove('hidden');
        flashcardElement.classList.add('flipped');
    }
}

function showNextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    displayCard();
}

function showPrevCard() {
    currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
    displayCard();
}

// 4. Add event listeners
flashcardElement.addEventListener('click', flipCard);
nextButton.addEventListener('click', showNextCard);
prevButton.addEventListener('click', showPrevCard);

// 5. Initial display
document.addEventListener('DOMContentLoaded', displayCard);
const body = document.body;
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
}

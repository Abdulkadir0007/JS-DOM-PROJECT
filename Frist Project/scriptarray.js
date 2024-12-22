
//? Start Random Qouta

const randomQuotes = [
    'Be yourself; everyone else is already taken.',
    'So many books, so little time.',
    'A room without books is like a body without a soul',
    'You only live once, but if you do it right, once is enough.',
    'Be the change that you wish to see in the world.',
    "If you tell the truth, you don't have to remember anything.",
    'The best way to predict the future is to invent it.',
]

const quoteAuthor = document.querySelector('.random-quote #qouta-author');
const quoteText = document.querySelector('.random-quote #quote-text');
const quoteButton = document.querySelector('.random-quote #get-quote');

function defaultQuote(){
    const randomIndex = Math.floor(Math.random() * randomQuotes.length);
    quoteText.innerHTML = '<q>'+randomQuotes[randomIndex]+'</q>';
}
defaultQuote();
quoteButton.addEventListener('click',defaultQuote)
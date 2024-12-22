
//? Start Random Qouta

const randomQuotes = [
    {
      quote: 'Be yourself; everyone else is already taken.',
      author: '― Oscar Wilde',
    },
    {
      quote:
        'So many books, so little time.',
      author: '― Norman Vincent Peale',
    },
    {
      quote: 'A room without books is like a body without a soul.',
      author: '― Marcus Tullius Cicero',
    },
    {
      quote: 'You only live once, but if you do it right, once is enough.',
      author: '― Mae West',
    },
    {
      quote: 'Be the change that you wish to see in the world.',
      author: '― Mahatma Gandhi',
    },
    {
      quote: "If you tell the truth, you don't have to remember anything.",
      author: '― Mark Twain',
    },
    {
      quote:
        'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
      author: '― Samuel Beckett',
    },
    {
      quote: 'With the new day comes new strength and new thoughts.',
      author: '― Eleanor Roosevelt',
    },
  ];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * randomQuotes.length);
  return randomQuotes[randomIndex];
}
const quoteAuthor = document.querySelector('.random-quote #qouta-author');
const quoteText = document.querySelector('.random-quote #quote-text');
const quoteButton = document.querySelector('.random-quote #get-quote');

function defaul(){
  const i = getRandomQuote()
  const Qouta = i.quote;
  const author = i.author;
  quoteText.innerHTML = '<q>'+Qouta+'</q>'
  quoteAuthor.innerHTML = author;
 quoteAuthor.style.textAlign = 'end'
}
defaul()
quoteButton.addEventListener('click',defaul)
const quoteAuthor = document.querySelector('.random-quote #qouta-author');
const quoteText = document.querySelector('.random-quote #quote-text');
const quoteCat = document.querySelector('.random-quote #qouta-cat');
const quoteButton = document.querySelector('.random-quote #get-quote');

const APIUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

const getQuote = ()=>{
    fetch(APIUrl,{headers: { 'X-Api-Key': 'aMwFpjSOFYAFGHNz+PwTuQ==5i0EKevTZRt8wBsy'},}).then(data=>data.json()).then(item=>{

        console.log(item);
        quoteText.innerHTML = '<q>'+item[0].quote+'</q>';
        quoteAuthor.innerHTML = '― '+item[0].author;
        quoteCat.innerHTML ='Category : '+ item[0].category;
    });

}
getQuote();

quoteButton.addEventListener('click',getQuote);

(function() {
    
    const qouteAuthor = document.getElementById('qouta-author')
    qouteAuthor.style.display = "block"
    qouteAuthor.style.textAlign = 'end'
    const qouteCat = document.getElementById('qouta-cat')
    qouteCat.style.display = 'block';
    qouteCat.style.textAlign = 'start'
}
)()


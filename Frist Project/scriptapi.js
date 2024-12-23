const quoteAuthor = document.querySelector('.random-quote #qouta-author');
const quoteText = document.querySelector('.random-quote #quote-text');
const quoteCat = document.querySelector('.random-quote #qouta-cat');
const quoteButton = document.querySelector('.random-quote #get-quote');
const catQuotes = ["age", "alone", "amazing", "anger", "architecture", "art", "attitude", "beauty", "best", "birthday", "business", "car", "change", "communication", "computers", "cool", "courage", "dad", "dating", "death", "design", "dreams", "education", "environmental", "equality", "experience", "failure", "faith", "family", "famous", "fear", "fitness", "food", "forgiveness", "freedom", "friendship", "funny", "future", "god", "good", "government", "graduation", "great", "happiness", "health", "history", "home", "hope", "humor", "imagination", "inspirational", "intelligence", "jealousy", "knowledge", "leadership", "learning", "legal", "life", "love", "marriage", "medical", "men", "mom", "money", "morning", "movies", "success"];

const getQuote = ()=>{
      
    const catIndex = Math.floor(Math.random()*catQuotes.length);
    const catQuote = catQuotes[catIndex];
    const APIUrl = 'https://api.api-ninjas.com/v1/quotes?category='+catQuote;

    fetch(APIUrl,{headers: { 'X-Api-Key': 'aMwFpjSOFYAFGHNz+PwTuQ==5i0EKevTZRt8wBsy'},}).then(data=>data.json()).then(item=>{
        console.log(item);
        quoteText.innerHTML = '<q>'+item[0].quote+'</q>';
        quoteAuthor.innerHTML = '― '+item[0].author;
        quoteCat.innerHTML ='Category : '+ item[0].category;
    }).catch(error => {
        console.error('Error Fatching Quotes', error);
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


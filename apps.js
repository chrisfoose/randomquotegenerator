console.log('Connected!');

/*
const qt = fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(json => json)
*/

//let displayQuote = '';
let quoteButton = document.getElementById('quoteButton');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

/*
async function getQuote(event) {
    randomNumber = Math.floor(Math.random() * json.length);
    console.log(randomNumber);
    return randomNumber;

}; */



const newQuote = async (event) => {     
    try { 

    
    const url = 'https://type.fit/api/quotes';

    const response = await fetch(url);
    if (response.ok) {
        let jsonResponse = await response.json();
        num = Math.floor(Math.random() * jsonResponse.length);

        quote.innerHTML = jsonResponse[num].text;
        author.innerHTML = jsonResponse[num].author;
        
    }
} catch (error) {
    console.log(error);
}}
   

quoteButton.addEventListener('click', newQuote);
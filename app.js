// Get ui elements
const quoteBox = document.querySelector('#quote-box');
const quote    = document.querySelector('#text');
const author   = document.querySelector('#author');
const newQuote = document.querySelector('#new-quote');

// Event listeners for  new quote
window.addEventListener('load', displayQuote);
quoteBox.addEventListener('click',displayQuote);

function displayQuote(){
  // Get quote from api and display in ui
  fetch('https://talaikis.com/api/quotes/random/')
  .then((res)=>res.json())
  .then((data)=>{
    quote.textContent = data.quote;
    author.className = 'blockquote-footer text-right';
    author.textContent = data.author;
  })
  .catch((err)=>{
    quote.className = 'alert alert-danger';
    quote.textContent = 'Something went wrong...'
    console.log(err);
  });
}

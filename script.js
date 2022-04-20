// get quotes from API
let apiQuotes = [];

const quoteContainer= document.getElementById('quote-container')
const quoteText= document.getElementById('quote')
const authorText= document.getElementById('author')
const twitterBtn= document.getElementById('twitter')
const newQuoteBtn= document.getElementById('new-quote')
const loader = document.getElementById('loader')



// show new quote

function newQuote(){
    
    // pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]

    // the api returns an object so we need to do a .text or .author
    

    // the api returns some null authors so i'll do a if to check
    if(quote.author == null){
        authorText.textContent = 'Unknown'
    }else{
        authorText.textContent = quote.author
    }

    // check the quote lengh so if is a big quote it will add the class that i do in css for large quotes and change font size
    if(quote.text.length >166){
        quoteText.classList.add('long-quote')
    }else{
        quoteText.classList.remove('long-quote')
    }

    quoteText.textContent = quote.text
    
}



async function getQuotes(){
    
    const apiUrl = 'https://type.fit/api/quotes';

    try{
        // means that this const will not be populated until has some data fetched from our API
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote();
    }catch(error){
        alert(error)
        //cath error here
    }
}

// tweet quote

function tweetQuote(){

    // twitter url will save the quote
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}` 

    // will open the twitter with the url already tweeting and with the text saved
    window.open(twitterUrl , '_blank')
}


// when the page starts

getQuotes();



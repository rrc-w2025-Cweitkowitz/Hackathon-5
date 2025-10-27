//christian function -- fetching the API
async function fetchRandomQuote() {
    
    const api_url ="https://zenquotes.io/api/quotes/random";

    try {
        //gets the data from the api
        const response = await fetch(api_url);

        // If it doesn't successfully get the page, throw the status error
        if (!response.ok) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }

        //.json() parses the response as JSON and returns it
        return response.json();   
    } catch (error) {
        // catch network errors or the HTTP status error that was thrown
        console.error("Failed to get the quotes:", error.message);
    }
}

const quoteList = document.getElementById("quote-list");
let quoteCount = 0;

async function displayRandomQuote() {
    const fetchQuote = await fetchRandomQuote();
    let quoteItem = document.createElement("li");

    quoteItem.textContent = fetchQuote[quoteCount].q;
    quoteList.appendChild(quoteItem);

    quoteCount ++;
    // console.log(fetchQuote[0].q);
}

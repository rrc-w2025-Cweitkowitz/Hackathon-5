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
        return await response.json();   
    } catch (error) {
        // catch network errors or the HTTP status error that was thrown
        console.error("Failed to get the quotes:", error.message);
    }
}
counterTest = 0
//logs the output of the fetched data
buttonValue = document.getElementById("quoteGenerator")

document.getElementById("quoteGenerator").addEventListener("click", (event) => {
    counterTest ++
    console.log(counterTest)
})

// async function quoteParsing() {
//     const quote = await fetchRandomQuote()
//     quote.forEach((quote) => {
//         let test = document.createElement("p")
//         test.textContent = (`Author: ${quote.a} \n Quote: ${quote.q}`)
//         testAppend = document.getElementById("quoteContainer")
//         testAppend.appendChild(test)
//     })
// }
// async function quoteParsing() {
//     const quote = await fetchRandomQuote()
//     quote.forEach((quote) => {
//         let test = document.createElement("p")
//         test.textContent = (`Author: ${quote.a} \n Quote: ${quote.q}`)
//         testAppend = document.getElementById("quoteContainer")
//         testAppend.appendChild(test)
//     })
// }
// fetchRandomQuote()
//     .then((data) => console.log(data));



async function testQuote() {
    const quote = await fetchRandomQuote()
    quoteIndex.textContent = quote[0].q
    const quoteLoader = document.getElementById("quoteInjection")
    quoteLoader.appendChild(quoteIndex)
}

testQuote()
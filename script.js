//christian function -- fetching the API
// async function fetchRandomQuote() {
     
//     const api_url ="https://quoteapi.com/";  

//     try {
//         //gets the data from the api
//         const response = await fetch(api_url);

//         // If it doesn't successfully get the page, throw the status error
//         if (!response.ok) {
//             throw new Error(`HTTP Error! status: ${response.status}`);
//         }

//         //.json() parses the response as JSON and returns it
//         return await response.json();   
//     } catch (error) {
//         // catch network errors or the HTTP status error that was thrown
//         console.error("Failed to get the quotes:", error.message);
//     }
// }

//logs the output of the fetched data
fetchRandomQuote()
    .then((data) => console.log(data));


// try to fetch only one quote 
async function fetchQuote() {
  try {
    const response = await fetch('https://zenquotes.io/api/quotes/random');  
    const data = await response.json();
    
    console.log(`"${data.content}"`);
    console.log(`- ${data.author}`);
    
    return data;
  } catch (error) { 
    console.error('Error fetching quote:', error);
  }
}

// Call the function
fetchQuote();  

  



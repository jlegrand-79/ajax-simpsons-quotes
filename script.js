// This function loads a new Simpsons quote from the Simpsons Quotes API
function fetchSimpsonsQuotesJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const $quoteNum = 1;
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=${$quoteNum}`;
    axios.get(url)
        .then(function (response) {
            return response.data[0]; // response.data instead of response.json() with fetch
        })
        .then(function (quote) {
            console.log('data decoded from JSON:', quote);

            // Build a block of HTML
            const quoteHtml = `
            <figure>
            <blockquote>
                <q> ${quote.quote} </q>
            </blockquote>
            <figcaption>
            <img src="${quote.image}" style="max-height:50vh" /><br />
            —${quote.character}
            </figcaption>
            </figure>
            `;
            document.querySelector('#quote').innerHTML = quoteHtml;
        });
}

const element = document.querySelector('#newQuote');
element.addEventListener("click", fetchSimpsonsQuotesJSON);

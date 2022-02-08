const app = require('express')();
const PORT = 8080;

// Imports quotes.json file
const quotes = require('./Quotes/quotes.json');

// Generates random number and picks random quote
function generateQuote() {
    randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber]
}



app.listen(
    PORT,
    () => console.log(`Alive on Port: ${PORT}`)
);

// app.use( express.json() );

app.get('/', (req, res) => {
    res.status(200).send(
        generateQuote()
    )
});
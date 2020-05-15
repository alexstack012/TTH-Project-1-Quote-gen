/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
  },
  {
    quote: "I find your lack of faith disturbing.",
    source: "Darth Vader: Star Wars Episode 4: A New Hope",
    year: "1977",
    tag: "Nerdy",
  },
  {
    quote: "Incoming fire has the right of way.",
    source: "Unknown",
    citation: "https://artofteenagestalking.wordpress.com/2008/10/26/cod4-death-quotes/",
    tag: "military",
  },
  {
    quote: "Don’t spend time beating on a wall, hoping to transform it into a door.",
    source: "Coco Chanel",
    citation: "https://www.lifehack.org/articles/communication/30-the-most-inspirational-quotes-all-time.html",
  },
  {
    quote: "Holding onto anger is like drinking poison and expecting the other person to die.",
    source: "Budda",
    citation: "https://www.lifehack.org/articles/communication/30-the-most-inspirational-quotes-all-time.html",
  },

];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);

  return quotes[randomQuote];

/***
 * `printQuote` function
***/

function printQuote() {
  let currentQuote = getRandomQuote();
  let currentColor = getRandomColor();
  let html = "<p class='quote'> " + currentQuote.quote + "</p>";
  html += "<p class='source'> " + currentQuote.source;
  if ("citation" in currentQuote) {
    html += "<span class='citation'> " + currentQuote.citation + "</span>";
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

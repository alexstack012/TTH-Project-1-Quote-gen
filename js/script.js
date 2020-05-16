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
let quotes = [
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
    background: '#9D2208',
    color: '#FFFFFF',
  },
  {
    quote: "I find your lack of faith disturbing.",
    source: "Darth Vader: Star Wars Episode 4: A New Hope",
    year: "1977",
    tag: "Nerdy",
    background: '#FF0000',
    color: '#FFFFFF',
  },
  {
    quote: "Incoming fire has the right of way.",
    source: "Unknown",
    citation: "https://artofteenagestalking.wordpress.com/2008/10/26/cod4-death-quotes/",
    tag: "Military",
    background: '#00FDFF',
    color: '#FFFFFF',
    
  },
  {
    quote: "Don’t spend time beating on a wall, hoping to transform it into a door.",
    source: "Coco Chanel",
    citation: "https://www.lifehack.org/articles/communication/30-the-most-inspirational-quotes-all-time.html",
    background: '#39FF04',
    color: '#FFFFFF',
  },
  {
    quote: "Holding onto anger is like drinking poison and expecting the other person to die.",
    source: "Budda",
    citation: "https://www.lifehack.org/articles/communication/30-the-most-inspirational-quotes-all-time.html",
    background: '#AB00FF',
    color: '#FFFFFF',
  },

];
/**Random quotes above with each quote in an array, used multiple attributes including the citiation if it was used
 * ` from a website, tags for what catagory they may fall into and the year if known.
***/


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomLine = Math.floor( Math.random() * quotes.length);
}

let nIntervId;

function changeColor() {
nIntervId = setInterval(printQuote, 5000)

}
//Random color generator


/***
 * `printQuote` function
***/

function printQuote () {
let line = getRandomQuote();
let message = ' ';
let message = '<p class ="quote" style=color:' + line.color + ';>' + line.quote + '</p>';
    message = '<p class ="source" style=color:' + line.color + ';>' + line.source + '</p>';
    document.getElementById('quote-box').innerHTML + message;
    document.body.style.backgroundColor + line.background;

};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

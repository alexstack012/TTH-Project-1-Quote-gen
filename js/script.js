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

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var quotes = [
	{
		quote: "Life is what happens when you're busy making other plans.",
		source: "John Lennon",
		citation: "https://blog.hubspot.com/sales/famous-quotes",
		year: "unknown",
		tags: "Music"
	},
	{
		quote: "I find your lack of faith disturbing.",
		source: "Darth Vader",
		citation: "Star Wars Epi 4, A New Hope",
		year: 1977,
		tags: "Nerdy",
  },
	{
		quote: "Incoming fire has the right of way.",
		source: "Unknown",
		citation: "unknown",
		year: "unknown",
		tags: "Military",
	},
	{
		quote: "Don’t spend time beating on a wall, hoping to transform it into a door..",
		source: "Coco Chanel",
		citation: "unknown",
		year: "unknown",
		tags: "unknown",
	},
	{
		quote: "What we think, we become",
		source: "Buddha",
		citation: "unknown",
		year: "unknown",
		tags: "Faith",
	},
	{
		quote: "Holding onto anger is like drinking poison and expecting the other person to die",
		source: "Buddha",
		citation: "unknown",
		year: "unknown",
		tags: "Faith",
	},
];

/**Random quotes above with each quote in an array, used multiple attributes including the citiation if it was used
 * ` from a website, tags for what catagory they may fall into and the year if known.
***/

var colors = [

	{
        background: "#6639a6", //Purple
        button: "#521262"
	},
    {
        background: "#3f72af", //Blue
        button: "#112d4e"
	},
	{
        background: "#3fc1c9", //Aqua
        button: "#fc5185"
	},
	{
        background: "#00adb5", //Teal
        button: "#393e46"
	},
	{
        background: "#118df0", //Light Blue
        button: "#0e2f56"
    },
	
];

let timer;

//I set colors because with random colors sometimes the quotes can be hard to read

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);

    return quotes[randomQuote];
}

function getRandomColor() {
    let randomColor = Math.floor(Math.random() * colors.length);

    return colors[randomColor];
}

// runs the printQuote function after 15 seconds
function startTimer() {
    timer = setInterval(printQuote, 15000);
}
/***
 * `printQuote` function
***/

function printQuote() {

	let currentQuote = getRandomQuote();
	
	let currentColor = getRandomColor();
	
	let html = "<p class='quote'> " + currentQuote.quote + "</p>";
	
	html += "<p class='source'> " + currentQuote.source;
	
    // If the citation property is there in the currentQuote and adds it to the string
    if ("citation" in currentQuote) {
        html += "<span class='citation'> " + currentQuote.citation + "</span>";
	}
	
    // If the date property is there in the currentQuote and if so, adds it to the string
    if ("date" in currentQuote) {
        html += "<span class='year'> " + currentQuote.date + "</span>";
	}
	
    html += "<span class='tags'> " + currentQuote.tags + "</span>";


    // currentColor to change the button color and currentColor to change the background color
	document.getElementById("quote-box").innerHTML = html;
	
	document.body.style.background = currentColor.background;
	
    document.getElementById("loadQuote").style.background = currentColor.button;

    // clears any previous timers that might be running and starts a new one
    clearTimer();
    startTimer();
}

printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
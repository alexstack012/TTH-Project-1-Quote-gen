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
var message = '';
var red;
var green;
var blue;
var viewedQuotes =[];

var quotes = [
	{
		quote: "Life is what happens when you're busy making other plans.",
		source: "John Lennon",
		citation: "",
		year: "",
		tags: "Music"
	},
	{
		quote: "I find your lack of faith disturbing.",
		source: "Darth Vader",
		citation: "",
		year: 1977,
		tags: "Nerdy",
  },
	{
		quote: "Incoming fire has the right of way.",
		source: "Unknown",
		citation: "",
		year: "",
		tags: "Military",
	},
	{
		quote: "Don’t spend time beating on a wall, hoping to transform it into a door..",
		source: "Coco Chanel",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "What we think, we become",
		source: "Buddha",
		citation: "",
		year: "",
		tags: "Faith",
	},
	{
		quote: "Holding onto anger is like drinking poison and expecting the other person to die",
		source: "Buddha",
		citation: "",
		year: "",
		tags: "Faith",
	},
];

/**Random quotes above with each quote in an array, used multiple attributes including the citiation if it was used
 * ` from a website, tags for what catagory they may fall into and the year if known.
***/


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	
	var splicedQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}


//Random color generator

function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}


/***
 * `printQuote` function
***/

function printQuote() {
	// On click event, function printQuote runs, then fires the getRandomQuote function
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		message += '';
	}
	if ( quotes.tags ) {
		message += '<h3>' + quotes.tags + '</h3>';
	} else {
		message += '';
	}
	print(message);
	//Generate random color
	randomColorGenerator();
	//Update background with new random color
	document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
  quotes.js
  Array of quotes are in the quotes.js file. easy to add new quotes.
***/

//build string. also needs to be cleared before new quote is displayed
let html = '';
let oldRandomQuote; //do not repeat last quote
/***
 * `getRandomQuote` function
  function returns a randomNumber only;
***/
function getRandomQuote(){
  const randomNumber = Math.floor( Math.random() * quotes.length);
  return randomNumber;
}


/***
 * `printQuote` function
   fetches a random number from:getRandomQuote() uses it to build object,
   then uses that to build html string from quotes array.
***/
function printQuote(message){
    html = '';//clear for new;
    let randomQuote = getRandomQuote();
    if(randomQuote === oldRandomQuote){
      randomQuote = getRandomQuote();
    }
    if(quotes[randomQuote] === undefined){//try to catch Uncaught TypeError
      randomQuote = getRandomQuote();///give a new number;
    }
    document.body.style.background = randomColor();
    html += '<p class="quote">' +quotes[randomQuote].quote+ '</p>';
    html += '<p class="source">' +quotes[randomQuote].source;
    if(quotes[randomQuote].citation){
      html += '<span class="citation">' +quotes[randomQuote].citation+ '</span>';
    }if(quotes[randomQuote].year){
      html += '<span class="year">' +quotes[randomQuote].year+ '</span></p>';
    }if(quotes[randomQuote].tags){
      html += '<p><span class="tags">' +quotes[randomQuote].tags+ '</span></p>';
    }
    document.getElementById('quote-box').innerHTML = html;//do not touch
    oldRandomQuote = randomQuote;//store the last one and don't repeat if the same;
}


/*
this sections selects a random color.
in randomColorSelector.js
*/
///end random color

/*/////////
auto repeat
*////////////
var myVar = setInterval(myTimer, 5000);
function myTimer() {
  printQuote();
}
/////////  end auto repeat




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
  print to screen.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

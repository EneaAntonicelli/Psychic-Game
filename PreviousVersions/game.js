
var wins = 0; // Declare the wins variable

var words = [ /*Here we create an array to store a list of prechosen words. */
    "madonna",
    "turdburglar",
    "perrywinkle",
    "commando",
    "ostrich",
    "avocado"
]


var word = words[Math.floor(Math.random() * words.length)]; /*What this bit of code does is:
Create a variable container called words. Now, in this container:
 Point to the "words" array and read the code from right to left.
 For the total number of words  being contained inside this array (words.length gives you 6), use the Math.random method. 
  Math.random give you a random decimal between 0 and 6 but without using 6. In other words, it gives you 6 options (0,1,2,3,4,5)
  This decimal can be long, and difficult to work with. Thus, we apply the Math.floor method to it. This rounds this decimal DOWN into an integer. Now we have a random number which covers every place in the index.*/

var answers = []; /*Here we create an open array which we will populate with each letter of the randomized word. Initially it will be populated with underscores, and then those underscores will be replaced with letters */

var lettersLeft = word.length;/*TO DO: understaning this one is a bit difficult for me. What this variable is supposed to do, is keep track of how many letters are yet to be guessed. Every time the player guesses, this variable will be decremented (--i) by 1 for each instance of the letter in the word. */


for (var i = 0; i < word.length; i++) { /*We need to know how many underscores or letters will correspond to the randomized word. We do this by establishing a simple loop. We take the value of how many times we would like for it to loop from the length of letters in the randomized word. (word.length) Notice how this reference to "word" does not have an "s" at the end. "words" would reference the array. */

    answers[i] = "_";/* Now we take each iteration of the loop, and add it to the array above as an underscore */
}

function greeting() {  /*creating a function that runs through gathering basic data like name and confirmation to play.*/
    var name = prompt("What is your name?"); /*asks user to input a name*/
    var confirmName = confirm("Hello " + name + ". Are you ready to play hangman?");/*TO DO: I am not sure why this one gets grayed out but it appears to be working...*/
    if (confirm); {
        /*Insert instructions into div.
        Insert underscores = to number of letters of the randomized word.
        challenege: use "settimeout" function to place each underscore every half a second. DO THIS LAST!! */

        document.getElementById("placeHolder").textContent = "This is how many letters we need: " + answers.join(" ");/*TO DO: I cannot get this to write on screen in the correct spot. I would really like for this to log the spaces somewhere and keep them written; updating on the fly, instead of just alerting. textContent and innerHTML are not working for me.*/
    }
    
}// End of the greetingfunction

window.onload = function() { /*Wait for the entire window to load before executing this function*/
    document.getElementById("btnstart").onclick = function (){greeting();} /*TO DO: I cannot for the life of me get this two lines to work. On button click, execute the greeting function. Why does the greeting function without me setting it off? */
    /*TO DO: This is not writing to the body*/
}




// while (lettersLeft > 0) {
//     /*The entire game code will occupy this area. We use a while loop because we are making the declaration that so long as the letters left are greater than 0, the game will continue. Once this number hits 0, it will return false, and the loop will cease to function.*/
//     document.getElementById("lead").innerHTML = placeHolders; /*What this line does is say: Alert the user with something that takes each of the items in the "answers" array, and concatinate them as strings. Furthermore, separate them with a space. So right off the bat, say the word was "commando"; this line of code would show "_ _ _ _ _ _ _ _". If we had already guessed the letters "m, a, and c" this would show "C _ M M A_ _ _". */
//     var guess = prompt("Guess a letter, you sack of swine.");
//     if (guess === null) {/*First thing to get out of the way, is if the player selects cancel. If this happens, Javascript will immediately return a "null". So here, we use the break method in order to quit the game.*/
//         break;
//     } else if (guess.length !== 1) { /* Else if the guess length does not = 1, meaning the player types too many words in, then alert the following */
//         alert("Enter 1 letter dude.. Have you never played hangman?")
//     } else { /* For everything else, there is Mastercard. */
//         for (var j = 0; j < word.length; j++) {/*create a new loop that will run for as many letters as there are in the randomized word */
//             answers[j] = guess;/* TO DO: I dont know how this does what it does but it do*/
//             lettersLeft--;/*From remaining letters, subtract 1. Meaning, for every correct guess, decrement this value by one.*/
//         } // For loop end
//     } // Else end 
// } // While Loop end 
// Start end

// document.getElementById("lead").innerHTML(answers.join(" "));
// document.getElementById("lead").innerHTML("Good job nerd! The answer was " + word);




// window.onload = myFunction() {
//     document.btn.onclick = function myFunction();
// };
    /*var name = prompt("What is your dumb name?");
    var confirmname = confirm("Hello " + name +". You ready for this shit?");*/


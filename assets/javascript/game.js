
var wins = 0; // Declare the wins variable
var btn = document.getElementsByClassName("btn");
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

var answers = [];/*Here we create an open array which we will populate with each letter of the randomized word. Initially it will be populated with underscores, and then those underscores will be replaced with letters */

for (var i =0; i < word.length; i++){ /*We need to know how many underscores or letters will correspond to the randomized word. We do this by establishing a simple loop. We take the value of how many times we would like for it to loop from the length of letters in the randomized word. (word.length) Notice how this reference to "word" does not have an "s" at the end. "words" would reference the array. */

    answers[i] = "_";/* Now we take each iteration of the loop, anf add it to the array above as an underscore */
}
var lettersLeft = word.length; /*TO DO: understaning this one is a bit difficult for me. What this variable is supposed to do, is keep track of how many letters are yet to be guessed. Every time the player guesses, this variable will be decremented (--i) by 1 for each instance of the letter in the word. */

while (lettersLeft > 0){
    /*The entire game code will occupy this area. We use a while loop because we are making the declaration that so long as the letters left are greater than 0, the game will continue. Once this number hits 0, it will return false, and the loop will cease to function.*/
    alert(answers.join(" ")); /*What this line does is say: Alert the user with something that takes each of the items in the "answers" array, and concatinate them as strings. Furthermore, separate them with a space. So right off the bat, say the word was "commando"; this line of code would show "_ _ _ _ _ _ _ _". If we had already guessed the letters "m, a, and c" this would show "C _ M M A_ _ _". */
    var guess = prompt("Guess a letter, you sack of swine.");
    if (guess === null);{
        break;
    }
    else if {
        (guess.length !== 1) {
            alert("Enter 1 letter dude.. Have you never played hangman? wtf.")
        }
    }
    else {
        // updated the game save state.
    }
}

// window.onload = myFunction() {
//     document.btn.onclick = function myFunction();
// };
    var name = prompt("What is your dumb name?");
    var confirmname = confirm("Hello " + name +". You ready for this shit?");
    
    
    function myFunction(){
    alert(name);
    alert(confirmconfirm);
    }






    //validation code to see State field is mandatory.  


if (confirm) {
    document.appendChild("h1", blankWord);
}
else {
    document.write("Ok go fuck yourself then...")
}

// Now we want the computer to select a random word.

// Now we want the computer to take the players guess.

// Ensure that the player guess is an alphabetical letter

// Make sure guesses are not repeatable

// If the guessed letter is part of the word, add to 

// document.getElementsByClassName("btn");
// var start.onClick()
//Global varibles
var numToGuess = 0;
var amountOfGuess = 0;

//Create a load event to allocate a number for the user to guess
document.addEventListener('load',randomNumber(),false);

//Create a click event to accept the guess
var event1 = document.getElementById("button1");
    event1.addEventListener('click',startGame,false);

//Create a random number
function randomNumber(){
    numToGuess = Math.floor((Math.random() * 20) + 1);
}

//create the main game logic
function startGame(){
    var guess = parseInt(document.getElementById("input1").value);
        
    //evalulate if the guess is correct
    if (guess === numToGuess){
        amountOfGuess++;
        winner();
    } 
    //evalulate if guess is to high or to low
    else if (guess < numToGuess){
        document.getElementById("highLow").innerHTML = "Higher!!";
        amountOfGuess++;
    } else {
        document.getElementById("highLow").innerHTML = "Lower!!";
        
        amountOfGuess++;
    }
    
}

//Winning output
function winner(){
    document.getElementById("counter").innerHTML = "You have won! The number was " + numToGuess + " and it took you " + amountOfGuess + " gueses!";
}
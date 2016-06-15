//Global varibles
var contestants = [];

//Create the click event to add contestant to array
var event1 = document.getElementById("addName");
    event1.addEventListener('click',addContestant,false);

//Create the click event to pick a winner at random
var event2 = document.getElementById("generateWinner");
    event2.addEventListener('click',pickWinner,false);

//Create function for adding the contestants
function addContestant(){
    contestants.push(document.getElementById("contestantName").value);
}

//Generate a random winner
function pickWinner() {
    var winner = contestants[Math.floor(Math.random() * contestants.length)];
    document.getElementById("output").innerHTML = "The winner is " + winner;
}
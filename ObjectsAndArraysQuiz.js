//Global varibles
var questionsArray = [];
var questionNumber = 0;
var score = 0;

//Create an on load function to all the function to create the objects and then put them into an array
document.addEventListener('load',objectCreation(),false);

//Add a click event to fix all the bugs
var event1 = document.getElementById("submit");
    event1.addEventListener('click',submitAnswer,false);

//Main load logic starts here
function objectCreation(){
    //Create the object constructer
    function questionData (question, optionOne, optionTwo, optionThree, correctAnswer) {
        this.question = question;
        this.optionOne = optionOne;
        this.optionTwo = optionTwo;
        this.optionThree = optionThree;
        this.correctAnswer = correctAnswer;
    }
    
    //Create 5 objects with the question data in
    var qustionOne = new questionData("When was the last time England won a major tournament?", "1996", "1966", "1906", "answerTwo");
    var qustionTwo = new questionData("How many goals has Wayne Rooney scored for England?", "52", "47", "64", "answerOne");
    var qustionThree = new questionData("How many times has England failed to qualify for the European Championship?", "1", "3", "5", "answerThree");
    var qustionFour = new questionData("Who scored the winner against Wales in the 2016 European Championship?", "Daniel Sturridge", "Jamie Vardy", "Wayne Rooney", "answerOne");
    var qustionFive = new questionData("Who should be sent home for England just due to being a useless waste of space?", "James Milner", "Joe Hart", "Raheem Sterling", "answerThree");
    
    //Create an array of the questions
    questionsArray = [qustionOne, qustionTwo, qustionThree, qustionFour, qustionFive];
    
    //Populate the first question to the screen
   questionToPage();
}

//function to take the answer automatically and then move on to the next question
function answerQuestion(answer){
    if (questionNumber == 4){
        document.getElementById("output").innerHTML = "Your score was " + score;
    }
    else if (answer === questionsArray[questionNumber].correctAnswer){
        score++;    
    }
    questionNumber++;
    questionToPage();
    document.getElementById("answers").reset();
}

//Submit answer function
function submitAnswer(){
    
}

//function to populated the question data to the page
function questionToPage(){
    document.getElementById("question").innerHTML = questionsArray[questionNumber].question;
    document.getElementById("optionOne").innerHTML = questionsArray[questionNumber].optionOne;
    document.getElementById("optionTwo").innerHTML = questionsArray[questionNumber].optionTwo;
    document.getElementById("optionThree").innerHTML = questionsArray[questionNumber].optionThree;
}

//Create a click event to accept the values
var event1 = document.getElementById("button1");
    event1.addEventListener('click',calcInterest,false);

//Start the main program logic
function calcInterest(){
    //Grab user inputs and assign to varibles
    var amount = parseInt(document.getElementById("amount").value);
    var interest = parseInt(document.getElementById("interest").value);
    var term = parseInt(document.getElementById("term").value);
    
    //calculate interest
    var totalInterest = (amount*(interest/100)) * term;
    var interestPerMonth = totalInterest / (term * 12);
    interestPerMonth = interestPerMonth.toFixed(2);
   
    
document.getElementById("intValue").innerHTML = "The total interest will be £" + totalInterest + "<br>The interest payable each month will be £" + interestPerMonth;
}
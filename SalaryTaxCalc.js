//global varibles
var higherValTax = 0;
var lowerValTax = 0;
var totalWage = 0;
var allowanceVal = 11000;
var natInsContribution = 0;
var afterTax = 0;
var totalValTax = 0;

//create on click event to accept the value calculate the tax and then print to the screen
var event1 = document.getElementById("submit");
    event1.addEventListener('click',calcTax,false);

//Start of the main program logic
function calcTax(){
    
    //get user input and set to a varible
    totalWage = parseInt(document.getElementById("annualWage").value);
    
    //call to the function to calculate nation insurance contributions
    nationInsurance();
    
    //break down salary to work out which tax brackets they fall in to then fire off the functions to calculate tax and then print to the screen
    if (totalWage > 100000){
        allowanceVal = 0;
        higherValTax = totalWage - 32000;
        twentyTax(32000);
        fourtyTax(higherValTax);
        printResult();
    } else if (totalWage > 43000){
        higherValTax = totalWage - 43000;
        twentyTax(32000);
        fourtyTax(higherValTax);
        printResult();
    } else if (totalWage > allowanceVal){
        lowerValTax = totalWage - allowanceVal;
        twentyTax(lowerValTax);
        printResult();
    } else {
        //output to screen that user is not eligible to be taxed
        document.getElementById("belowTax").innerHTML = "Your annual wage of £" + totalWage + " is below the tax threshold of £11000 and so you will not be taxed"
    }
}

//function for tax at 20%
function twentyTax(taxIncome){
    lowerValTax = taxIncome;
    lowerValTax = lowerValTax * 0.2;
}

//function for tax at 40%
function fourtyTax(taxIncome){
    higherValTax = taxIncome;
    higherValTax = higherValTax * 0.4;
}

//national insurance calculations
function nationInsurance(){
    var weeklyWage = totalWage / 52;
    if (weeklyWage > 827){
        var highNatIns = weeklyWage - 827
        natInsContribution = (highNatIns * 0.02) * 52;
        natInsContribution += (827 * 0.12) * 52;
        natInsContribution -= 1000;
    } else if (weeklyWage > 155 && weeklyWage < 827) {
        natInsContribution = (weeklyWage * 0.12) * 52;
        natInsContribution -= 1000;
    } else {
        natInsContribution = 0;
    }
}

//function for bringing the calculations together and printing the result to the screen
function printResult(){
    //check if wage falls in to higher bracket if so include that value in the printout
    if (higherValTax > 0){
        document.getElementById("higherTaxText").innerHTML = "Total tax at 40%: ";
        document.getElementById("higherTax").innerHTML = "£" + higherValTax;
    }
    //print the annual salary to the screen
    document.getElementById("totalWageText").innerHTML = "Results calculated on annual wage of: ";
    document.getElementById("totalWage").innerHTML = "£" + totalWage;
    
    //print that the allowance is £11000
    document.getElementById("allowanceText").innerHTML = "Your annual allowance is: ";
    document.getElementById("allowance").innerHTML = "£" + allowanceVal;
    
    //print lower tax text and values
    document.getElementById("lowerTaxText").innerHTML = "Total tax at 20%";
    document.getElementById("lowerTax").innerHTML = "£" + lowerValTax;
    
    //create a spacer and a line for display purposes
    document.getElementById("spacer").innerHTML = " ";
    document.getElementById("line").innerHTML = "________";
    
    //calculate the total amount of tax
    totalValTax = lowerValTax + higherValTax;
    document.getElementById("totalTaxText").innerHTML = "Total tax payable: ";
    document.getElementById("totalTax").innerHTML = "£" + totalValTax;
    
    //calculate the value after tax
    afterTax = totalWage - totalValTax - natInsContribution;
    document.getElementById("totalAfterTaxText").innerHTML = "Total wage after deductions: ";
    document.getElementById("totalAfterTax").innerHTML = "£" + afterTax.toFixed(2);
    
    //Nationl insurance contributions
    document.getElementById("totalNatInsText").innerHTML = "Total national insurance contributions: ";
    document.getElementById("totalNatIns").innerHTML = "£" + natInsContribution.toFixed(2);
    
    //draw the chart
    drawChart();
}

//function to display it as a chart
function drawChart () {
   var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
      text: "Annual Earnings Breakdown"  
      },
      data: [
      {        
        type: "pie",
        dataPoints: [
        { y: natInsContribution },
        { y: totalValTax},
        { y: afterTax }
            
      
        ]
      }
      ]
    });

    chart.render();
  }
//Global varibles
var randomArray = [];
var arrayFile = [];
var x = document.getElementById("fileImport");

//Call on load function to draw the chart
document.addEventListener('load',randomArrayMethod(),false);

//create 5 random values in an array
function randomArrayMethod(){
    for (var i = 0; i < 5; i++) {
        randomArray[i] = Math.floor((Math.random() * 100) + 1)
    }
    drawChart();
}

function drawChart () {
  /*  var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
      text: "Random Chart"  
      },
      data: [
      {        
        type: "column",
        dataPoints: [
        { y: randomArray[0] },
        { y: randomArray[1]},
        { y: randomArray[2] },
        { y: randomArray[3] },
        { y: randomArray[4] }
      
        ]
      }
      ]
    });

    chart.render();*/
    document.getElementById("output").innerHTML = x;
  }

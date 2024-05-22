stat = "";

function preload(){
    loadImage('Frog.jpg');
}
function setup(){
   canvas= createCanvas(350, 400);
   canvas.center();
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Detecting Objects.";
}
function modelLoaded(){
    stat = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
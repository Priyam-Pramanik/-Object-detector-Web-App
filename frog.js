
stat = "";
objects = [];

function preload(){
   img = loadImage('Frog.jpg');
}
function setup(){
   canvas= createCanvas(640, 420);
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
    objects = results;
}
function draw(){
    image(img, 0, 0, 640, 420);
    if(stat != ""){
        for(i = 0; i < objects.length; i++){
            confidence = floor(objects[i].confidence* 100);
            text(objects[i].label + " " + confidence + " %", objects[i].x, objects[i].y);
            fill("#FF0000");
            stroke("#FF0000");
            noFill("");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height,);
            document.getElementById("status").innerHTML = "There is 1 object in the image out which "+ objects.length+ " are detected."
        }
    }
}
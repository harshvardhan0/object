img = "";
status = "";
object = [];

function setup(){
    canvas = createCanvas(800,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(800,450);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd",modelloded);
    document.getElementById("st").innerHTML = "status = detecting objects";
}
function draw(){
    image(img,0,0,0,800,450);
    if(status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video,gotresult);
        for (i = 0; i < object.length; i++) {
                document.getElementById("st").innerHTML = "status =  objects detected";
                document.getElementById("ob").innerHTML = "number of objects detected  =  " + object.length;
           
                fill(r,g,b);
                percent = floor(object[i].confidence * 100);
    text(object[i].label + "" + percent + "%", object[i].x + 15,object[i].y +15);
    noFill();
    stroke(r,g,b);
    rect(object[i].x,object[i].y,object[i].width,object[i].height,); 
        }
    }
    

    
}

function modelloded(){
    console.log("modelloded");
status = true;
objectDetector.detect(img,gotresult);
}
function gotresult(error,result){
    if(error){
        console.log(error);
    }
    console.log(result);
    object = result;
}
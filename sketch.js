var canvas;
var music;
var ground1;
var ground2;
var ground3;
var ground4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(730,600);
    ground1 = createSprite(80,580,170,30);
    ground1.shapeColor = "red"
    ground2 = createSprite(260,580,170,30);
    ground2.shapeColor = "blue"
    ground3 = createSprite(440,580,170,30);
    ground3.shapeColor = "green"
    ground4 = createSprite(620,580,170,30);
    ground4.shapeColor = "orange"
    box = createSprite(random(20,750),200,50,50)    
    box.shapeColor = "white"
    box.velocityX = 5;
    box.velocityY = 5;


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges)

    if(ground1.isTouching(box) && box.bounceOff(ground1)){
        box.shapeColor = "red"
        music.play();
    }
    if(ground2.isTouching(box) && box.bounceOff(ground2)){
        box.shapeColor = "blue"
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(ground3.isTouching(box) && box.bounceOff(ground3)){
        box.shapeColor = "green"
    }
    if(ground4.isTouching(box) && box.bounceOff(ground4)){
        box.shapeColor = "orange"
    }


drawSprites();
    //add condition to check if box touching surface and make it box
}


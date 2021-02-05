var canvas;
var music;
var Rbox, Bbox, Gbox, Ybox

var ball
var edges 
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(830,600);

    edges = createEdgeSprites()

    Rbox = createSprite(100, 600, 200, 50)
    Bbox = createSprite(310, 600, 200, 50)
    Gbox = createSprite(520, 600, 200, 50)
    Ybox = createSprite(730, 600, 200, 50)

    ball = createSprite(random(100, 700), random(50, 200), 20, 20)
    ball.shapeColor = "white"

    Rbox.shapeColor = "red"
    Bbox.shapeColor = "blue"
    Gbox.shapeColor = "Green"
    Ybox.shapeColor = "yellow"

    ball.velocityX = 5
    ball.velocityY = 6
    
    music.loop()
    
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
  
    //create edgeSprite

    ball.bounceOff(edges)

   

if(ball.isTouching(Rbox)){
    ball.shapeColor = Rbox.shapeColor
    ball.bounceOff(Rbox)
  

}
if(ball.isTouching(Bbox)){
    ball.shapeColor =   Bbox.shapeColor
    ball.bounceOff(Bbox)
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop()
}
if(ball.isTouching(Gbox)){
    ball.shapeColor =   Gbox.shapeColor
    ball.bounceOff(Gbox)
   
}
if(ball.isTouching(Ybox)){
    ball.shapeColor =   Ybox.shapeColor
    ball.bounceOff(Ybox)
  
}

    //add condition to check if box touching surface and make it box
    drawSprites()
}

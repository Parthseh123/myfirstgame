var player;
var edges;
var side1;
var side2;
var side3;
var side4;
var obs1;
var obs2;
var obs3;
var obs4;
var obs5;
var obs6;
var obs7;
var obs8;
var obs9;
var obs10;
var obs11;
var obs12;
var obs13;
var obs14;
var obs15;
var obs16;
var obs17;
var obs18;
var obs19;
var obs20;
var obs21;
var obs22;
var obs23;
var obs24;
var obs25;
var obs26;
var obs27;
var obs28;
var obs29;
var obs30;
var obs31;
var obs32;
var target;
// let a = prompt("what is your name","Guest")
//  console.log(a)

function preload(){
  //load game assets
  groundImage = loadImage("../images/background.png");
  playerImage = loadImage("../images/player.png");
  obsImage = loadImage("../images/o.png");
}


function setup() {
  createCanvas(1350,600);
  

  edges = createEdgeSprites();
 
 player = createSprite(90,520,50,50);
 player.shapeColor = "white"
 
 target = createSprite(1200,100,50,50);
 target.shapeColor = "blue";
// sides
 side1 = createSprite(20,300,30,730);
 side1.shapeColor = "purple";

 side2 = createSprite(680,580,1320,30);
 side2.shapeColor = "purple";

 side3 = createSprite(1330,200,30,730);
 side3.shapeColor = "purple";

 side4 = createSprite(680,10,1300,30);
 side4.shapeColor = "purple";
// obstacles
 obs1 = createSprite(80,440,90,30);
 obs1.shapeColor = "red";

 obs2 = createSprite(200,520,30,90);
 obs2.shapeColor = "red";

 obs3 = createSprite(110,400,30,90);
 obs3.shapeColor = "red";

 obs4 = createSprite(150,370,100,30);
 obs4.shapeColor = "red";

 obs5 = createSprite(270,460,170,30);
 obs5.shapeColor = "red";

 obs6 = createSprite(160,370,130,30);
 obs6.shapeColor = "red";

 obs7 = createSprite(250,370,30,80);
 obs7.shapeColor = "red";
 obs7.velocityY = 1


 obs8 = createSprite(210,320,30,120);
 obs8.shapeColor = "red";

 obs9 = createSprite(245,270,100,30);
 obs9.shapeColor = "red";

 obs10 = createSprite(120,270,150,30);
 obs10.shapeColor = "red";

 obs11 = createSprite(340,400,30,100);
 obs11.shapeColor = "red";

 obs12 = createSprite(280,230,30,100);
 obs12.shapeColor = "red";

 obs13 = createSprite(340,190,150,30);
 obs13.shapeColor = "red";

 obs14 = createSprite(400,360,150,30);
 obs14.shapeColor = "red";

 obs15 = createSprite(450,470,30,190);
 obs15.shapeColor = "red";

 obs16 = createSprite(100,270,150,30);
 obs16.shapeColor = "red";

 obs17 = createSprite(400,100,30,150);
 obs17.shapeColor = "red";
}

function draw() {
  background("black");
 
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);

  if(obs7.isTouching(obs5))(
    obs7.bounceOff(obs5)
      )

      if(obs7.isTouching(obs9))(
        obs7.bounceOff(obs9)
          )


  if(keyDown("down")) {
    player.y +=3};

    if(keyDown("up")) {
      player.y -=3};
    
      if(keyDown("left")) {
        player.x -=3};

        if(keyDown("right")) {
          player.x +=3};

          if(player.isTouching(side1)) {
            player.collide(side1)
            textSize(20);
            text("You can't go inside the wall",200,200);
          };
          if(player.isTouching(side2)) {
            player.collide(side2)
            textSize(20);
            text("You can't go inside the wall",200,200)
          };
          
          if(player.isTouching(side3)) {
            player.collide(side3)
           textSize(20);
            text("You can't go inside the wall",200,200)
          };
            if(player.isTouching(side4)) {
              player.collide(side4)
             textSize(20);
            text("You can't go inside the wall",200,200)
            };
            if(player.isTouching(obs1)) {
              player.collide(obs1)
            
            let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };
            

            if(player.isTouching(obs2)) {
              player.collide(obs2)
  
            let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520

            };
            

            if(player.isTouching(obs3)) {
              player.collide(obs3)
            let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            }; 
            

              if(player.isTouching(obs4)) {
                player.collide(obs4)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
              };
            
            if(player.isTouching(obs5)) {
              player.collide(obs5)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs6)) {
              player.collide(obs6)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs7)) {
              player.collide(obs7)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs8)) {
              player.collide(obs8)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };


            if(player.isTouching(target)) {
            let b = confirm("😎😎😀😀😁😁You won , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };


            
 drawSprites();
          }
          
          

  

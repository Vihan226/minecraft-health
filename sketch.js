var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10,rect11,rect12,rect13,rect14,rect15,rect16,rect17,rect18,rect19,rect20,rect21,rect22,rect23,rect24,rect25,rect26,rect27,rect28,rect30,rect31;
var arm;
var armImage;
var apple;
var oak;
var cstone;
var health;
var cstoneImage;
var randomImage;
var oakImage;
var bImage;
var woodImage;
var sheerImage;
var cImage;
var hImage;
var appleImage;
function preload(){
armImage= loadImage("usearm.png")
cstoneImage= loadImage("cstone.png")
randomImage= loadImage("random.png")
oakImage= loadImage("oak.jpg")
bImage= loadImage("Screenshot (44).png")
woodImage= loadImage("wood.png")
sheerImage= loadImage("usesheer.png")
cImage= loadImage("cactus.png")
hImage= loadImage("health.png")
appleImage= loadImage("redapple.png")
}
function setup() {
  createCanvas( windowWidth, windowHeight);
  
  rect1=createSprite(width/1.1-width/2,height/2-154,50,50)
  rect1.addImage("r",oakImage)
  rect1.scale=.05

 rect2=createSprite(width/.82-width/2,height/2-40,10,10)
rect2.shapeColor="black"

 rect3=createSprite(width/1.1-width/2,height/2-201.9,50,50)
 rect3.addImage("r2",oakImage)
 rect3.scale=.05

rect4=createSprite(width/1.1-width/2,height/2-231.25,50,50)
rect4.addImage("r4",appleImage)
rect4.scale=.1

rect5=createSprite(width/1.057-width/2,height/2-231.25,50,50)
rect5.addImage("r5",appleImage)
rect5.scale=.1


rect10=createSprite(width/1.142-width/2,height/2-231.25,50,50)
rect10.addImage("r10",appleImage)
rect10.scale=.1

rect11=createSprite(width/1.12-width/2,height/2-281.25,50,50)
rect11.addImage("r10",appleImage)
rect11.scale=.1

rect12=createSprite(width/1.08-width/2,height/2-281.25,50,50)
rect12.addImage("r10",appleImage)
rect12.scale=.1

rect13=createSprite(width/.65-width/2,height/2-481.25,50,50)
rect13.addImage("r10",appleImage)
rect13.scale=.1

rect6=createSprite(width/.72-width/2,height/2-381.25,50,50)
rect6.addImage("r6",cstoneImage)
rect6.scale=.03

rect7=createSprite(width/.7-width/2,height/2-321.25,50,50)
rect7.addImage("r7",cstoneImage)
rect7.scale=.03

rect14=createSprite(width/.75-width/2,height/2-321.25,50,50)
rect14.addImage("r14",cstoneImage)
rect14.scale=.03


 arm= createSprite(width/.8-width/2,height/2+100)
 arm.addImage("armI",armImage)
 arm.scale=.9
                    
 rect8=createSprite(width/1.83-width/2,height/2-164.25,50,50)
 rect8.addImage("r6",cstoneImage)
 rect8.scale=.01

 rect9=createSprite(width/1.83-width/2,height/2-204,50,50)
 rect9.addImage("r",oakImage)
 rect9.scale=.015

 rect15=createSprite(width/2-width/2,height/2-344,50,50)
 rect15.addImage("r15",woodImage)
 rect15.scale=.125

 rect16=createSprite(width/2.3-width/2,height/2-364,50,50)
 rect16.addImage("r16",woodImage)
 rect16.scale=.125

 
 rect17=createSprite(width/1.3-width/2,height/2-124,50,50)
 rect17.addImage("r17",sheerImage)
 rect17.scale=.13

  
 rect18=createSprite(width/2.4-width/2,height/2-124,50,50)
 rect18.addImage("r18",oakImage)
 rect18.scale=.05

 rect19=createSprite(width/2.4-width/2,height/2-76,50,50)
 rect19.addImage("r19",oakImage)
 rect19.scale=.05

 rect20=createSprite(width/2.4-width/2,height/2-173,50,50)
 rect20.addImage("r20",appleImage)
 rect20.scale=.1

 
 rect21=createSprite(width/.35-width/2,height/2-173,50,50)
 rect21.addImage("r21",cImage)
 rect21.scale=.2

 rect22=createSprite(width/.4-width/2,height/2-303,50,50)
 rect22.addImage("r22",cImage)
 rect22.scale=.2

 rect23=createSprite(width/1.8-width/2,height/2+120,50,50)
 rect23.addImage("r23",hImage)
 rect23.scale=.07

 rect24=createSprite(width/.35-width/2,height/2,1500,600)
rect24.visible=false

oak=""
apple=0
cstone=""
health=1000
}

function draw() {
  background(bImage);


fill("black")
  text(": "+ oak,width/1.8-width/2,height/2-200)
  text("Apple: "+ apple,width/1.8-width/2,height/2-180)
  text(": "+ cstone,width/1.8-width/2,height/2-160)
  text(": "+ health,width/1.7-width/2,height/2+125)
  rect2.velocityX=0
  rect2.velocityY=0
    
  arm.velocityX=0
  arm.velocityY=0

  rect1.velocityX=0
  rect1.velocityY=0

  rect3.velocityX=0
  rect3.velocityY=0

  rect4.velocityX=0
  rect4.velocityY=0

  rect5.velocityX=0
  rect5.velocityY=0

  
  rect6.velocityX=0
  rect6.velocityY=0

  
  rect7.velocityX=0
  rect7.velocityY=0

  rect10.velocityX=0
  rect10.velocityY=0

  rect11.velocityX=0
  rect11.velocityY=0

  rect12.velocityX=0
  rect12.velocityY=0

  rect13.velocityX=0
  rect13.velocityY=0

  rect14.velocityX=0
  rect14.velocityY=0

  
  rect15.velocityX=0
  rect15.velocityY=0

  rect16.velocityX=0
  rect16.velocityY=0

  rect17.velocityX=0
  rect17.velocityY=0

  rect18.velocityX=0
  rect18.velocityY=0

  rect19.velocityX=0
  rect19.velocityY=0

  rect20.velocityX=0
  rect20.velocityY=0

  rect21.velocityX=0
  rect21.velocityY=0

  rect22.velocityX=0
  rect22.velocityY=0

  rect24.velocityX=0
  rect24.velocityY=0


  health--
  if(keyDown("a")){
   /* arm.velocityX=-5
    arm.velocityY=0*/

    rect1.velocityX=5
    rect1.velocityY=0

    rect3.velocityX=5
    rect3.velocityY=0

    rect4.velocityX=5
    rect4.velocityY=0

    rect5.velocityX=5
    rect5.velocityY=0

    rect6.velocityX=5
    rect6.velocityY=0

    
    rect7.velocityX=5
    rect7.velocityY=0

        
    rect10.velocityX=5
    rect10.velocityY=0

    rect11.velocityX=5
    rect11.velocityY=0

    rect12.velocityX=5
    rect12.velocityY=0

    rect13.velocityX=5
    rect13.velocityY=0

    rect14.velocityX=5
    rect14.velocityY=0

    
    rect15.velocityX=5
    rect15.velocityY=0

    rect16.velocityX=5
    rect16.velocityY=0

    rect17.velocityX=5
    rect17.velocityY=0

    rect18.velocityX=5
    rect18.velocityY=0

    rect19.velocityX=5
    rect19.velocityY=0

    rect20.velocityX=5
    rect20.velocityY=0

    
    rect21.velocityX=5
    rect21.velocityY=0

    
    rect22.velocityX=5
    rect22.velocityY=0

    rect24.velocityX=5
    rect24.velocityY=0
  }
  
  if(keyDown("d")){
   /* arm.velocityX=5
    arm.velocityY=0*/

    
    rect1.velocityX=-5
    rect1.velocityY=0

    rect3.velocityX=-5
    rect3.velocityY=0

    rect4.velocityX=-5
    rect4.velocityY=0

    rect5.velocityX=-5
    rect5.velocityY=0

    rect6.velocityX=-5
    rect6.velocityY=0

    rect7.velocityX=-5
    rect7.velocityY=0

    rect10.velocityX=-5
    rect10.velocityY=0

    rect11.velocityX=-5
    rect11.velocityY=0

    rect12.velocityX=-5
    rect12.velocityY=0

    rect13.velocityX=-5
    rect13.velocityY=0

    
    rect14.velocityX=-5
    rect14.velocityY=0

        
    rect15.velocityX=-5
    rect15.velocityY=0

    rect16.velocityX=-5
    rect16.velocityY=0

    rect17.velocityX=-5
    rect17.velocityY=0

    rect18.velocityX=-5
    rect18.velocityY=0

    rect19.velocityX=-5
    rect19.velocityY=0

    rect20.velocityX=-5
    rect20.velocityY=0

    rect21.velocityX=-5
    rect21.velocityY=0

    rect22.velocityX=-5
    rect22.velocityY=0

    rect24.velocityX=-5
    rect24.velocityY=0

  }


  

  if(keyDown("w")|| touches.length>0){
    rect1.velocityY=5
  rect1.velocityX=0

  rect3.velocityY=5
  rect3.velocityX=0

  rect4.velocityY=5
  rect4.velocityX=0

  rect5.velocityY=5
  rect5.velocityX=0

  rect6.velocityY=5
  rect6.velocityX=0

  
  rect7.velocityY=5
  rect7.velocityX=0

  rect10.velocityY=5
  rect10.velocityX=0

  
  rect11.velocityY=5
  rect11.velocityX=0

  
  rect12.velocityY=5
  rect12.velocityX=0

  
  rect13.velocityY=5
  rect13.velocityX=0

    
  rect14.velocityY=5
  rect14.velocityX=0

      
  rect15.velocityY=5
  rect15.velocityX=0

  rect16.velocityY=5
  rect16.velocityX=0

  rect17.velocityY=5
  rect17.velocityX=0

  rect18.velocityY=5
  rect18.velocityX=0

  rect19.velocityY=5
  rect19.velocityX=0

  rect20.velocityY=5
  rect20.velocityX=0

  rect21.velocityY=5
  rect21.velocityX=0

  rect22.velocityY=5
  rect22.velocityX=0

  rect24.velocityY=5
  rect24.velocityX=0


  touches =[]
  }
  
  if(keyDown("s")){
   rect1.velocityY=-5
   rect1.velocityX=0

   rect3.velocityY=-5
  rect3.velocityX=0

  rect4.velocityY=-5
  rect4.velocityX=0

  rect5.velocityY=-5
  rect5.velocityX=0

  
  rect6.velocityY=-5
  rect6.velocityX=0

  rect7.velocityY=-5
  rect7.velocityX=0

  
  rect10.velocityY=-5
  rect10.velocityX=0

  rect11.velocityY=-5
  rect11.velocityX=0

  rect12.velocityY=-5
  rect12.velocityX=0

  rect13.velocityY=-5
  rect13.velocityX=0

  
  rect14.velocityY=-5
  rect14.velocityX=0

    
  rect15.velocityY=-5
  rect15.velocityX=0

  rect16.velocityY=-5
  rect16.velocityX=0

  rect17.velocityY=-5
  rect17.velocityX=0

  rect18.velocityY=-5
  rect18.velocityX=0

  rect19.velocityY=-5
  rect19.velocityX=0

  rect20.velocityY=-5
  rect20.velocityX=0

  rect21.velocityY=-5
  rect21.velocityX=0

  rect22.velocityY=-5
  rect22.velocityX=0

  rect24.velocityY=-5
  rect24.velocityX=0
  }

  if(mousePressedOver(rect1)){
  rect1.x=mouseX
  rect1.y=mouseY
  


  }

  if(mousePressedOver(rect3)){
    rect3.x=mouseX
    rect3.y=mouseY

  
  }
  if(mousePressedOver(rect4)){
    rect4.destroy();

    apple=apple+1
    health=health+50
  }
 
  if(mousePressedOver(rect5)){
    rect5.destroy();

    apple=apple+1
    health=health+50
  }

  if(mousePressedOver(rect6)){
    rect6.x=mouseX
    rect6.y=mouseY

  }
  
  if(mousePressedOver(rect7)){
    rect7.x=mouseX
    rect7.y=mouseY

 
  }
  if(mousePressedOver(rect10)){
    rect10.destroy();

    apple=apple+1
    health=health+50
  }
  if(mousePressedOver(rect11)){
    rect11.destroy();

    apple=apple+1
    health=health+50
  }
  if(mousePressedOver(rect12)){
    rect12.destroy();

    apple=apple+1
    health=health+50
  }

  if(mousePressedOver(rect13)){
    rect13.destroy();

    apple=apple+1
    health=health+50
  }
  if(mousePressedOver(rect14)){
    rect14.x=mouseX
    rect14.y=mouseY

  
  }
  if(mousePressedOver(rect15)){
    rect15.x=mouseX
    rect15.y=mouseY

  
  }
  if(mousePressedOver(rect16)){
    rect16.x=mouseX
    rect16.y=mouseY

  
  }
  if(mousePressedOver(rect17)){
    rect17.x=mouseX
    rect17.y=mouseY

  
  }
  if(mousePressedOver(rect18)){
    rect18.x=mouseX
    rect18.y=mouseY

  
  }
  if(mousePressedOver(rect19)){
    rect19.x=mouseX
    rect19.y=mouseY

  
  }
  if(mousePressedOver(rect20)){
    rect20.destroy();

    apple=apple+1
    health=health+50
  }
  if(mousePressedOver(rect21)){
    rect21.x=mouseX
    rect21.y=mouseY

  
  }
  if(mousePressedOver(rect22)){
    rect22.x=mouseX
    rect22.y=mouseY

  
  }
  if(rect17.isTouching(rect1)){
    rect1.scale=.025
  }
  if(rect17.isTouching(rect3)){
    rect3.scale=.025
  }
  if(rect17.isTouching(rect15)){
    rect15.scale=.065
  }
  if(rect17.isTouching(rect16)){
    rect16.scale=.065
  }
  if(rect17.isTouching(rect6)){
    rect6.scale=.017
  }
  if(rect17.isTouching(rect7)){
    rect7.scale=.017
  }
  if(rect17.isTouching(rect14)){
    rect14.scale=.017
  }
  if(rect17.isTouching(rect18)){
    rect18.scale=.025
  }
  if(rect17.isTouching(rect19)){
    rect19.scale=.025
  }
  if(rect17.isTouching(rect21)){
    rect21.scale=.15
  }
  if(rect17.isTouching(rect22)){
    rect22.scale=.15
  }
  if(rect2.isTouching(rect24)){
    background("white")
    fill("black")
    textSize(40)
    text("Desert Biome",width/1.5-width/2,height/2-250)
  }
if(health<0){
background("black")
}
 
 drawSprites();
    
}

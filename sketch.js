var issImg, bgImg, spaceCraft1Img, spaceCraft2Img, spaceCraft3Img, spaceCraft4Img
var iss, spaceCraft, hasDocked = false
var undock

function preload(){
  bgImg = loadImage("images/spacebg.jpg")
  issImg = loadImage("images/iss.png")
  spaceCraft1Img = loadImage("images/spacecraft1.png")
  spaceCraft2Img = loadImage("images/spacecraft2.png")
  spaceCraft3Img = loadImage("images/spacecraft3.png")
  spaceCraft4Img = loadImage("images/spacecraft4.png")

}

function setup() {
  createCanvas(800,500);
  spaceCraft = createSprite(300, 350)
  spaceCraft.addImage(spaceCraft1Img)
  spaceCraft.scale = 0.3
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg)
  undock = createSprite(750,470,70,30)
  undock.shapeColor = "dodgerblue"
  undock.visible = false
}

function draw() {
  background(bgImg); 
    if(!hasDocked){
      spaceCraft.x = Math.round(random(spaceCraft.x-1,spaceCraft.x+1))
    if(keyDown("left")) {
      spaceCraft.x -= 5
      spaceCraft.addImage(spaceCraft4Img)
      spaceCraft.scale = 0.27
    } else if(keyDown("right")){
      spaceCraft.x += 5
      spaceCraft.addImage(spaceCraft3Img)
      spaceCraft.scale = 0.27
    } else if(keyDown("up")){
      spaceCraft.y -= 5
      spaceCraft.addImage(spaceCraft1Img)
    } else if(keyDown("down")){
      spaceCraft.y += 5
      spaceCraft.addImage(spaceCraft2Img)
      spaceCraft.scale = 0.27
    }else{
      spaceCraft.addImage(spaceCraft1Img)
      spaceCraft.scale = 0.3
    }
  }
  //console.log(spaceCraft.x, spaceCraft.y)
  if(spaceCraft.x === 330 && spaceCraft.y === 295){
    hasDocked = true
    spaceCraft.addImage(spaceCraft1Img)
    spaceCraft.scale = 0.3
    fill("dodgerblue")
    rect(720,450,70,30)
    fill("white")
    text("Undock",735,470)
    textSize(40)
    fill("white")
    text("Docking Sucessful",200, 450)
    if(mousePressedOver(undock)){
      spaceCraft.x = 300
      spaceCraft.y = 350
      hasDocked = false
    }
  }
  drawSprites();
}


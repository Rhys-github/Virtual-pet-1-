//Create variables here
var  dog,dogImg, happyDog, database, foodS, foodStock;
function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
  
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,250,20,20)
  dog.addImage(dogImg)
  dog.scale=0.15

  

  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  
  
}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog)
  }

  drawSprites();
  //add styles here
  text("Press up arow to feed the dog",50,50)
  textSize(20)
  fill("red")
  stroke(20)

}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}




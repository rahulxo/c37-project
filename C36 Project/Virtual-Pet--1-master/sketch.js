//Create variables here
var dog, happyDog, database, foodS, foodStock, dog1, dog2
function preload()
{
	//load images here
  dog=loadImage('images/dogImg.png')
  happyDog=loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog1=createSprite(400,350);
  dog1.addImage('dogImg',dog);
  foodStock=database.ref('Food');
  foodStock.on("value",readstock);
  //read game state from database
  readState=database.ref('gameState');
  readState.on("value",function(data){
    gameState=data.val();
  });
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  textSize(30);
  fill('blue');
  text('Press UP_ARROW Key To Feed Drago Milk!',100,50);
  //add styles here 
  if(gameState!="Hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();
  }else{
   feed.show();
   addFood.show();
   dog.addImage(sadDog);
  }
}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
}
database.ref('/').update({
  Food:x
  })
}




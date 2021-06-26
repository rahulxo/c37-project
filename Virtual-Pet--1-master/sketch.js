//Create variables here
var dog, happyDog, database, foodS, foodStock, dog1, dog2, button1, button2, fedTime, lastFed, foodOBJ, garden, washroom
function preload()
{
	//load images here
  dog=loadImage('images/dogImg.png')
  happyDog=loadImage('images/dogImg1.png');
  bedroom=loadImage("Bed Room.png");
  garden=loadImage("Garden.png");
  washroom=loadImage("Wash Room.png");
}


function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog1=createSprite(400,350);
  dog1.addImage('dogImg',dog);
  foodStock=database.ref('Food');
  foodStock.on("value",readstock);
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
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
fill(255,255,254);
textSize(15);
if(lastFed>=2){
  text("Last Feed : "+ lastFed%12 + "PM", 350,30);
}else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);
}else{
  text("Last feed : " + lastFed + "AM",350,30);
}
currentTime=hour();
  if(currentTime==(lastFed+1)){
      update("Playing");
      foodObj.garden();
   }else if(currentTime==(lastFed+2)){
    update("Sleeping");
      foodObj.bedroom();
   }else if(currentTime>(lastFed+2) && currentTime<=(lastFed+4)){
    update("Bathing");
      foodObj.washroom();
   }else{
    update("Hungry")
    foodObj.display();
   }
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

function feedDog(){
  dog.addImage(happyDog);

  foodOBJ.updateFoodStock(foodOBJ.getFoodStock()-1);
  database.ref('/').update({
    Food:foodOBJ.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
Food:foodS
  })
}


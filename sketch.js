//Create variables here
var Dog, DogImage
var HappyDog
var database
var foodS
var foodStock
function preload()
{
  //load images here
   DogImage = loadImage("dogImg.png");
}

function setup() {
  var database = firebase.database();
  console.log(database);
  createCanvas(500, 500);
  background(0);
   Dog = createSprite(250,250,50,50);
  Dog.addImage(DogImage);
  Dog.scale = 0.1;
   foodStock = database.ref('Food');
   foodStock.on("value", readStock);
}


function draw() {  
  
  drawSprites();
  //add styles here

}




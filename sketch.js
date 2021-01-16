var dog,happyDog,Database,foodS,FoodStock;
var dogIm,DogHappy,readStock;

function preload()
{
  dogIm = loadImage("dogImg.png");
  DogHappy = loadImage("dogImg1.png");

}

function setup() {
  createCanvas(500,500);
  dog = createSprite(220,300,5,5);
  dog.addImage(dogIm);
  dog.scale=0.2;
  Database = firebase.database();
  FoodStock=Database.ref('Food');
  FoodStock.on("value",readStock);
}


function draw() {  
     background(46,139,87);
     if(keyWentDown(UP_ARROW)){
         writeStock(foodS);
         dog.addImage(DogHappy)
         
     }
  
  drawSprites();
  fill("white");
  textSize(10);
  text("Food = "+foodS,200,200);

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }
  else
  {
    x=x-1;
  }

Database.ref('/').update({
  Food:x
})
}



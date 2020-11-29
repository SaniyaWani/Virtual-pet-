//Create variables here
var dog, happyDog, database, foodS, foodStock=20;
var dogImage, dogImage1;

function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
  dogImage1 = loadImage("dogImg1.png");
}

function setup()  
{

  createCanvas(500, 500);
  
  database = firebase.database();

  dog = createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale=0.2

  var foodStockref = database.ref('gameState');
  foodStockref.on("value",readStock,function(data){
    foodStock = data.val();
    });
 
    //Stroke(5);
       
  
}


function draw() 
{  

  background(46, 139,87);

  if(keyWentDown(UP_ARROW))
 {foodStock=foodStock-1
   writeStock(foodS);
   dog.addImage(dogImage1);
 }

  drawSprites();
  //add styles here
  textSize(30)
  fill("white")
text("Food : "+foodStock,125,100);
textSize(20)
text("Note:Press up arrow to feed milk to dog.",75,25);
}

function readStock(data)
{
    foodS = data.val(); 
    
}

function  writeStock(x)
{
  database.ref('/').update({
    Food:x})
 if(x<=0){
   x=0
 }else{
   x=x-1
 }

 

}



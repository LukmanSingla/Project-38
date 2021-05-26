var pet,pet1,database,petImg,petImg2,petposition,foodN=20,game="wait",a,reference,milk,milk1,timeN,a=0,gameState="hungry",bg="green",bgImg,lastFed;

function preload(){
    petImg=loadAnimation("images/dogImg.png");
    petImg2=loadAnimation("images/dogImg1.png");
    milk=loadImage("Milk.png");
    bgImg1=loadImage("images/Garden.png");
    bgImg2=loadImage("images/Bed Room.png");
    bgImg3=loadImage("images/Wash Room.png");
    bgImg4=loadImage("images/Living Room.png");
}
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    pet1=new Food();
}

function draw(){
    // background(bg);
    if(gameState=="play"){
        background(bgImg1);
    }else if(gameState=="sleep"){
        background(bgImg2);
    }else if(gameState=="washroom"){
        background(bgImg3);
    }else if(gameState=="play2"){
        background(bgImg4);
    }
    pet1.getState();
    pet1.changeState();
    pet1.hungry();

    fill("white");
    textSize(20);
    drawSprites();
    

}

var cat, cat_sit, cat_run;
var back, backImage;
var rat, ratImage;

function preload() {
    //load the images here
    cat_sit = loadAnimation("tomFour.png");
    backImage = loadImage("garden.png");
    ratImage = loadImage("jerryTwo.png")
    cat_run = loadAnimation("tomThree.png","tomTwo.png");

}

function setup(){
    createCanvas(1000,800);

    back = createSprite(500,400,1000,800);
    back.addImage(backImage);
    back.scale= 1.5;

    cat = createSprite(800,700,20,20);
    cat.addAnimation("cat", cat_sit);
    cat.scale = 0.1;

    rat = createSprite(200,700,20,20);
    rat.addImage(ratImage);
    rat.scale = 0.1;
    
    cat.debug = true;
    rat.debug = true;

    //create tom and jerry sprites here

}

function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide

    if(keyDown("left_arrow")){
        keyPressed()
       
    }
    if (
      cat.x - rat.x < cat.width / 2 + rat.width / 2 &&
      rat.x - cat.x < cat.width / 2 + rat.width/2 &&
      cat.y - rat.y < cat.height / 2 + rat.height/2 &&
      rat.y - cat.y < cat.height / 2 + rat.height/2
    ) {
      background("black");
      text("cat caught the mouse",0,780);
      console.log("cat has caught the mouse");
    } 
    else{

    background("white");
    
    }
    drawSprites();
}


function keyPressed(){
  cat.x = cat.x-5;
  cat.changeAnimation("cat",cat_run);

  //For moving and changing animation write code here


}



//VARIABLES
var canvas;
var attached = false;
var spr;
var spriteCount = 4;
var spriteArray = [];

//functions

//setup function
function setup() {
	canvas = createCanvas(1024, 768);
	canvas.parent("wrapper");
	canvas.position(448, 50);

  var sprite = function(n) {
    for(i = 0; i < n; i++){
        spriteArray[i] = createSprite(width/2, height/2, 40, 40);
        spriteArray[i].shapeColor = color(255);
        spriteArray[i].mouseActive = true;
        spriteArray[i].position.x = random(40, 1024);
        spriteArray[i].position.y = random(40, 768);
    }
  }
  sprite(spriteCount);

Sprite.onMouseOver = function() {
    
	}
	Sprite.onMouseOut = function() {
    this.scale = 1;
  }
    Sprite.onMousePressed = function() {
    this.shapeColor = color(128);
    this.scale=1.2;
  }
  Sprite.onMouseReleased = function() {
    this.shapeColor = color(255);
    if (attached) {
    	attached = false;
    } else {
    	attached = true;
    }
  }
  };

function check() {
  if (spriteArray[0] == onMouseOver || spriteArray[1] == onMouseOver || spriteArray[3] == onMouseOver || spriteArray[3] == onMouseOver) {
  this.scale = 1.2;
  console.log("JEWS");
};
};


//draw function
function draw() {
	background(50);
	drawSprites();
	//textAlign(CENTER, CENTER);
  	//text("use arrow keys, or SPACE to stop",
    //width/2, height*0.67);
    if(attached) {
    Sprite.position.x = mouseX;
  	Sprite.position.y = mouseY;
    }
    
}

//mouse functions

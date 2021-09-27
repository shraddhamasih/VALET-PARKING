//Create a reference for canvas 

//Give specific height and width to the car image
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    greencar_imgTag=new Image();
	greencar_imgTag.onload=uploadrover;
    greencar_imgTag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width,  canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width,  rover_height);
}
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if( rover_y  >=0)
    {
    rover_y -= 10;
    console.log("When up arrow is pressed = "+ rover_x +"-"+rover_y);
    uploadBackground();
    uploadrover();

    }
}

function down()
{
	//Define function to move the car downward
	if( rover_y  >=500)
    {
    rover_y = 10;
    console.log("When up arrow is pressed = "+ rover_x +"-"+rover_y);
    uploadBackground();
    uploadrover();

    }
}

function left()
{
	//Define function to move the car left side
	if( rover_x  >=0)
    {
    rover_x -= 10;
    console.log("When up arrow is pressed = "+ rover_x +"-"+rover_y);
    uploadBackground();
    uploadrover();

    }
}

function right()
{
	//Define function to move the car right side
	if( rover_x  <=700)
    {
    rover_x += 10;
    console.log("When up arrow is pressed = "+ rover_x +"-"+rover_y);
    uploadBackground();
    uploadrover();

}


var canvas = new fabric.Canvas("myCanvas");

ball_x = 5;
ball_y = 5;
hole_x = 800;
hole_y = 400


block_image_width = 50;
block_image_height = 50;

function load_img(){
	fabric.Image.fromURL("golf-h.png" , function (Img){
        hole_object = Img;
        hole_object.scaleToWidth(50);
        hole_object.scaleToHeight(50);
        hole_object.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_object);
    });
		
}

function new_image(){
    fabric.Image.fromURL("ball.png" , function (Img){
        ball_object = Img;
        ball_object.scaleToWidth(block_image_width);
        ball_object.scaleToHeight(block_image_height);
        ball_object.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_object);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_x == hole_x) && (ball_y == hole_y)){
		document.getElementById("hd3").innerHTML = "You have hit the goal!";
		canvas.remove(ball_object);
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	
	else{
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
		if(ball_y >= 0){
			ball_y = ball_y - block_image_height;
			canvas.remove(ball_object);
			new_image();
		}
	}

	function down()
	{	if (ball_y <= 425){
			ball_y = ball_y + block_image_height;
			canvas.remove(ball_object);
			new_image();
	}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			canvas.remove(ball_object);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <= 1050)
		{
			ball_x = ball_x + block_image_width;
			canvas.remove(ball_object);
			new_image();
		}
	}
	
}


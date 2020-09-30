canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mars_image=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
rover_width=100;
rover_height=90;
rover_x=400;
rover_y=300;
background_image="mars.jpg";
rover_image="rover.png";


function add() {
  background_imagetag=new Image();
  background_imagetag.onload=uploadBackground;
  background_imagetag.src=background_image;
  
  rover_imagetag=new Image();
  rover_imagetag.onload=uploadRover;
  rover_imagetag.src=rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uploadRover() {
    ctx.drawImage( rover_imagetag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="37") {
        left();
        console.log("left");
    }

    if (keypressed=="38") {
        up();
        console.log("up");
    }

    if (keypressed=="39") {
        right();
        console.log("right");
    }

    if (keypressed=="40") {
        down();
        console.log("down");
    }
}

function up() {
  if (rover_y >=0 ) {
     rover_y=rover_y-10; 
    console.log("when up arrow is pressed,x= " + rover_x+ ", y= " + rover_y);
    uploadBackground();
    uploadRover();
  }  
}

function down() {
    if (rover_y <=600 ) {
       rover_y=rover_y+10; 
      console.log("when up arrow is pressed,x= " + rover_x+ ", y= " + rover_y);
      uploadBackground();
      uploadRover();
    }  
  }

  function left() {
    if (rover_x >=0 ) {
       rover_x=rover_x-10; 
      console.log("when up arrow is pressed,x= " + rover_x+ ", y= " + rover_y);
      uploadBackground();
      uploadRover();
    }  
  }

  function right() {
    if (rover_x <=800 ) {
       rover_x=rover_x+10; 
      console.log("when up arrow is pressed,x= " + rover_x+ ", y= " + rover_y);
      uploadBackground();
      uploadRover();
    }  
  }

random_number=Math.floor(Math.random()*4);
background_image=mars_image[random_number];
console.log("backgroundimage=" + background_image);
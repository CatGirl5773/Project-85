canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1Width = 100;
car1Height = 50;

car2Width = 100;
car2Height = 50;

racing_track_images_array = ["track_1.jpg", "track_2.jpg", "track_3.jpg", "track_4.jpg", "track_5.jpg"];
random_number = Math.floor(Math.random() * 5);
console.log(random_number);

background_image = racing_track_images_array[random_number];
console.log("Background image = " + background_image);

car1_image = "car1.png";
car2_image = "car2.png";

car1_x = 10;
car1_y = 10;

car2_x = 10;
car2_y = 70;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1Width, car1Height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2Width, car2Height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38') {
        up1();
        console.log("up");
    }
    if(keypressed == '40') {
        down1();
        console.log("down");
    }
    if(keypressed == '37') {
        left1();
        console.log("left");
    }
    if(keypressed == '39') {
        right1();
        console.log("right");
    }
    if(keypressed == '87') {
        up2();
        console.log("up");
    }
    if(keypressed == '83') {
        down2();
        console.log("down");
    }
    if(keypressed == '65') {
        left2();
        console.log("left");
    }
    if(keypressed == '68') {
        right2();
        console.log("right");
    }
    if(car1_x > 700) {
        console.log("Car 1 won this round!");
        document.getElementById("game_status").innerHTML = "Car 1 Won!";
    } else if(car2_x > 700) {
        console.log("Car 2 won this round!");
        document.getElementById("game_status").innerHTML = "Car 2 Won!";
    }
    
}

function up1() {
    if(car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When the up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function down1() {
    if(car1_y <= 550) {
        car1_y = car1_y + 10;
        console.log("When the down arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function left1() {
    if(car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When the left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function right1() {
    if(car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("When the right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function up2() {
    if(car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When the w key is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function down2() {
    if(car2_y <= 550) {
        car2_y = car2_y + 10;
        console.log("When the s key is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function left2() {
    if(car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When the a key is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function right2() {
    if(car2_x <= 700) {
        car2_x = car2_x + 10;
        console.log("When the d key is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}